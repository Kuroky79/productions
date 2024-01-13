import HtmlWebpackPlugin from "html-webpack-plugin";
import ProgressPlugin from "html-webpack-plugin";
import DefinePlugin from "html-webpack-plugin";
import HotModuleReplacementPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({paths, isDev}:  BuildOptions): webpack.WebpackPluginInstance[]{
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new HotModuleReplacementPlugin(),
    ]
}