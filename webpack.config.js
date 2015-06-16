/**
 * Creates a test bundle in dist that will be fed to mocha.
 */
module.exports = {
    devtool: 'eval',
    entry: './test/nav.test',
    
    output: {
        path: __dirname + '/dist/',
        filename: 'test.js',
        publicPath: '/dist/'
    },
    externals: {
        react: 'var React',
        'react-router': 'var ReactRouter'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, include: /(src)|(test)|(node_modules\/jsdom)/, loader: 'babel' }
        ]
    }
};
