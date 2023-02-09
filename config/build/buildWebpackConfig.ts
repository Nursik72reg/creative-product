import {BuildOptions} from "./types/config";
import {buildLoaders} from "./buildLoaders";
import {buildResolver} from "./buildResolver";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";
import webpack from "webpack";


export function buildWebpackConfig(options: BuildOptions):webpack.Configuration{
    const {mode, paths, isDev} = options
    const {entry, build} = paths
    return {
        mode,
        entry ,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolver(options),

        output: {
            filename: "[name].[contenthash].js",
            chunkFilename: 'chunk.[name].[chunkhash:5].js',
            path: build,
            clean: true
        },
        plugins: buildPlugins(options) ,
        devtool: isDev ?  'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options): undefined,
    }
}