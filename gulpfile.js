var gulp = require('gulp');
var browserify = require('browserify');
var webserver = require('gulp-webserver');
var del = require('del');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var cacheBuster = require('gulp-cache-bust');
var uglify = require('gulp-uglify');
var pump = require('pump');
var uglifycss = require('gulp-uglifycss');


gulp.task('clean',
    function() {
        return del.sync(['public/**/*']);
    }
);


gulp.task('copyAssets', function () {
    return gulp.src('src/assets/**/*').pipe(gulp.dest('public/'));
});

gulp.task('buildHTML', function () {
    return gulp.src('src/html/**/*.html').pipe(gulp.dest('public/'));
});

// Hack to enable configurable watchify watching
var watching = false;
gulp.task('enable-watch-mode', function() { 
    gulp.watch('src/assets/**/*', ['copyAssets']);
    gulp.watch('src/html/**/*.html', ['buildHTML']);
    gulp.watch('src/sass/**/*.scss', ['buildCSS']);
    //watch JS handle by watchify using this variable
    watching = true;
});

gulp.task('buildJS', function() {
    var bundler = browserify('src/js/index.js', { cache: {}, packageCache: {} });
    
    function bundle() {
        bundler.ignore('reactstrap-tether');

        return bundler.transform('babelify', {presets: ['es2015', 'react']})
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('index.js'))
            .pipe(buffer())
            .pipe(gulp.dest('public/js'));
    }
    
    if(watching === true) {
        bundler.plugin(watchify);
        bundler.on('update', bundle);
        bundler.on('log', gutil.log);
    }
    return bundle();
});

gulp.task('buildCSS', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 3 versions']
        }))
        .pipe(gulp.dest('public/css')); 
});

gulp.task('compressJS',  ['buildJS'], function (cb) {
    pump([gulp.src('public/js/**/*.js'),
        uglify(),
        gulp.dest('public/js')
        ], cb);
});

gulp.task('compressCSS',  ['buildCSS'], function (cb) {
    pump([gulp.src('public/css/**/*.css'),
        uglifycss(),
        gulp.dest('public/css/')
        ], cb);
});

gulp.task('cacheBust', ['compressJS', 'compressCSS', 'buildHTML'], function () {
    return gulp.src('public/index.html')
        .pipe(cacheBuster())
        .pipe(gulp.dest('public/'));
});

gulp.task('serve', function() {
    return gulp.src('public').pipe(webserver({
        livereload: false,
        host: '0.0.0.0',
        port: 8080
    }));
});



gulp.task('build', ['clean', 'buildJS', 'buildCSS', 'buildHTML', 'copyAssets']);

gulp.task('default', ['enable-watch-mode', 'build', 'serve']);

gulp.task('dist', ['build', 'compressCSS', 'compressJS', 'cacheBust']);

gulp.task('distRun', ['dist', 'serve']);