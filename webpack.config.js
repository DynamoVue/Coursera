const path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/1.js",
    output : {
        filename:'main.js',
        path : path.resolve(__dirname,'dist')
    },
    module : {
        rules : [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    }
}