const fs = require('fs');
const path = require('path');

//fileName is relative to src directory
module.exports = function(fileName, textToGoAround, before, after ) {
    const fileLocation = path.join(__dirname, '..', 'src', fileName);
    const fileContents = fs.readFileSync(fileLocation, 'utf8');
    const newFileContents = fileContents.replace(textToGoAround, before + '\n' + textToGoAround + '\n' + after);
    fs.writeFileSync(fileLocation, newFileContents);
}