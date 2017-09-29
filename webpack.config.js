const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: {
        testBundle: './test',
        indexBundle: './index',
    },
    context: `${__dirname}/static_src`,
    output: {
        path: `${__dirname}/static/build`,
        filename: NODE_ENV === 'development' ? '[name].js' : '[name]-[hash].js',
        publicPath: '/static/build/',
        library: '[name]'
    },
    
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    
    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },

    module: {
        // loaders: [
        //     {
        //       test: /\.(js|jsx)?$/,
        //       include: `${__dirname}/static_src`,
        //       loader: 'babel',
        //       exclude: /node_modules/,
        //       query: {
        //         // cacheDirectory: true,
        //         presets: ['es2015', 'react']
        //       }
        //     }
        // ],
        rules: [
            // {
            //     test: /\.(js|jsx)$/,
            //     include: `${__dirname}/static_src`,
            //     // exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     options: {
            //         presets: ["es2015", "react", "stage-1"]
            //     }
            // },
            {
                test: /\.(js|jsx)$/,
                include: `${__dirname}/static_src`,
                loader: 'babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-1',  
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                loader: 'url-loader?limit=4096&name=[path][name].[ext]',
            },
        ],
    },


    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100,
    },

    devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : false,
};


if (NODE_ENV !== 'development') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
            },
        })
    );
}