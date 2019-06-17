const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'app'), //where is the javasript files, dirname is necesary because must be a absolute path
    output:{ //where is the bundle output files
        path: path.resolve(__dirname, 'build'), //must be absolute path,  dirname is necesary because must be a absolute path
        filename: 'bundle.js'
    },
    devServer:{
        port: 3000,
        contentBase: path.resolve(__dirname, 'build') //where is the files to deploy
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    }
};