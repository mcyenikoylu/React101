var path = require("path");
module.exports = {
    entry: './web/index.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js'
    },
    mode: 'development'
};