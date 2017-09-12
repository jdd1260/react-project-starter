const fs = require('fs');
const path = require('path');

//fileName is relative to src directory
module.exports = function(fileName, text ) {
    const fileLocation = path.join(__dirname, '..', 'src', fileName);
    fs.appendFileSync(fileLocation, '\n' + text);
}