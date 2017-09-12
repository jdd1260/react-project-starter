const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const mkdir = require('mkdirp');
const _ = require('lodash');

const name = _.get(process.argv, '2');

module.exports = function(name, templateName, filePath) {
    if (!name) {
        console.log("Error: A Name must be provided (one word)");
        process.exit(1);
    }
    const nameCaps = _.toUpper(_.snakeCase(name));
    const camelCase = _.camelCase(name);
    const templateValues = {name, nameCaps, camelCase};
    
    const templateFileName = path.join(__dirname, 'templates', templateName);
    const template = fs.readFileSync(templateFileName, "utf8");
    
    const result = handlebars.compile(template)(templateValues);
    
    const outputFileLocation = path.join(__dirname, '..', 'src', filePath) ;
    mkdir.sync(outputFileLocation);
    const outputFileName = path.join(outputFileLocation,  camelCase + ".js")
    fs.writeFileSync(outputFileName, result);
    
    console.log("New file created at " + outputFileName);
    
    return templateValues;
}

