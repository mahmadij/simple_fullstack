const path = require('path');

module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                loader:'babel-loader',
                test:/\.js$/,
                exclude:/node_module/
            },
            {
                loader:['css-loader','style-loader','sass-loader'],
                test:/\.scss/
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public')
    }
}