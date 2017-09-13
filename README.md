# React Project Starter Kit

This starter kit is designed to get you working on a new React project in no time. It gets you set up with a project structure, development/build steps using Gulp, ES2015 support, Bootstrap (v4) for styling, and generators useful for skipping some of the hassle of writing boilerplate code over and over.

## Getting Started

You'll need to install:

1. [Node.js](https://nodejs.org/en/)


2. [Gulp](https://gulpjs.com/)


## What you get

This project comes with the following libraries installed and set up by default. You may add or remove libraries as you need.

* [React](https://facebook.github.io/react/) is the JavaScript framework this project is designed around. 
* [Babel](https://babeljs.io/) allows us to take advantage of ES2015 conventions while still working in non-supporting browsers.
* [Browserify](http://browserify.org/) allows us to develop and use JavaScript modules.
* [Gulp](https://gulpjs.com/) runs our development server, compiles our JavaScript and CSS, and minifies everything when we're ready to deploy.
* [Redux](http://redux.js.org/) and [React-Redux](https://github.com/reactjs/react-redux) gives us an enhanced state management framework and integration with React.
* [React Router](https://github.com/ReactTraining/react-router) allows us to build Single Page Applications. This is used by default but could easily be removed.
* [Reactstrap](https://reactstrap.github.io/) integrates Bootstrap and React.
* [Redux Form](https://redux-form.com/7.0.4/) makes it easier to build forms with Redux. If you don't need forms this can be taken out.
* [redux-promise](https://github.com/acdlite/redux-promise) is Redux middleware to add support for nice handling of promises. This is great when using REST APIs.
* [Sass](http://sass-lang.com) gives us a more powerful system for building our CSS.
* [Bootstrap](http://getbootstrap.com/) for helpful styling utilities. This project builds Bootstrap with Sass so that you can better customize your styling (see src/sass/_variables.scss).

## Generators

Sick of writing the same code over and over again for React? Use a generator to save yourself some time. Get started by building the generator project:

```
cd generators
npm install
cd ..
```

### Component Generator 

Call a generator each time you want a new React component: 

```
generators/new_component Item
```

This will create a new JavaScript file called item.js in the src/js/components directory. The file will come with an exported component called `Item` that is connected to Redux. Boilerplate methods are provided but empty. 

### Form Component Generator 

Call the form generator each time you want a component that utilizes Redux Form:

```
generators/new_form_component User
```

This will create a new JavaScript file called user.js in the src/js/components/forms directory. The file will come with an exported component called `User` that is connected to Redux via Redux Form. Boilerplate methods are provided for field generation, validation, and error messaging. 


### Action Generator 

Call a generator each time you want a new Redux action: 

```
generators/new_action Search
```

This will create a new JavaScript file called search.js in the src/js/actions directory. The file will come with an exported function called `Search` that is then automatically imported and exported in the actions/index.js file for general usage. 


### Reducer Generator 

Call a generator each time you want a new Redux reducer: 

```
generators/new_reducer Items
```

This will create a new JavaScript file called items.js in the src/js/reducers directory. The file will come set up for managing state based on actions. The exported function is automatically added to the whole state in src/js/reducers/index.js. `items` is the field name storing the output of your reducer that is added to the Redux state.


## Development

To run your project locally:

```
npm install
gulp
```

To package your project for distribution:

```
gulp dist
```