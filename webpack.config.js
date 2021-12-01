import webpack from 'webpack';
import path from 'path';
import { cwd } from 'process';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import getWebpackLogger from 'webpack-log'; 
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ESlintWebpackPlugin from 'eslint-webpack-plugin';
import MiniCSSExtractPlugin from 'mini-css-extract-plugin';


const publicPath = '/test-calendar/';
const log = getWebpackLogger(
    {
        name: 'webpack-kit'
    }
);
const __dirname = cwd();
const progressHandler = () => {
    let previousLogs = new Set();
    let progressLog = getWebpackLogger({
        name: '>>>'
    });

    return (percentage, message, ...args) => {
        let currentLog = message;

        if (previousLogs.has(currentLog)) {
            return;
        } 

        else if (currentLog === '') {
            return;
        }

        progressLog.warn(currentLog);

        previousLogs.add(currentLog);
    };
};

export default (env, args) => {
    let currentMode = args.mode;

    let config = {
        entry: {
            main: path.resolve(__dirname, './src/main.js')
        },
    
        stats: 'errors-warnings',
    
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    use: 'babel-loader'
                },
                {
                    test: /.tsx?$/,
                    use: [
                        'babel-loader',
                        'ts-loader'
                    ]
                },
                {
                    test: /.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /.(css|sass)$/,
                    use: [
                        currentMode === 'production' ?
                            MiniCSSExtractPlugin.loader : 'vue-style-loader',
                        'css-loader',
                        'postcss-loader',
                    ]
                },
                {
                    test: /.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /.(woff|woff2|eot|ttf|otf)$/,
                    type: 'asset/resource'
                }
            ]
        },
    
        devServer: {
            static: {
                directory: path.resolve(__dirname, './dist'),
                publicPath: '/',
                watch: true,
            },
            historyApiFallback: true,
            port: 9000,
            open: true,
            hot: true,
            watchFiles: [
                path.resolve(__dirname, 'src/**/*.js'),
                path.resolve(__dirname, 'src/**/*.vue'),
                path.resolve(__dirname, 'src/**/*.css'),
                path.resolve(__dirname, 'src/**/*'),
            ]
        },
    
        optimization: {
            splitChunks: {
                chunks: 'all',
                minSize: 20000,
                minRemainingSize: 0,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                        name: 'vendors',
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            }
        },
    
        plugins: [
            new webpack.EnvironmentPlugin({
                BASE_URL: publicPath
            }),
            new webpack.ProgressPlugin(progressHandler()),
            new ESlintWebpackPlugin(),
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './public/index.html'),
                title: 'Vue-App',
                filename: path.resolve(__dirname, './dist/index.html')
            }),
            new MiniCSSExtractPlugin({
                filename: 'css/[name].min.css'
            })
        ],
    
        output: {
            path: path.resolve(__dirname, './dist/'),
            publicPath: publicPath,
            filename: 'js/[name].build.js',
            assetModuleFilename: 'img/[hash][ext][query]'
        }
    };

    if (currentMode === 'development') {
        log.info('Start dev-server, happy coding!');
    }

    if (currentMode === 'production') {
        log.info('Build your project for production');

        console.log();

        config.output.clean = {
            dry: true
        };
    }

    return config;
};
