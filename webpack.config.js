const path = require('path');

module.exports = {
  entry: './API/main.js',
  output: {
    filename: 'form-validate.js',
    path: path.resolve(__dirname, 'dist'),
    library: '_',
    libraryTarget: 'umd'
  }
};
