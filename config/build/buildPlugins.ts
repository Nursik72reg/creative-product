import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions):webpack.WebpackPluginInstance[] {
    const plugins = [
        // Плагин для html
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        // Плагин для прогрессбара
        new webpack.ProgressPlugin(),
        // Плагин для разбиение css в отделнные файлы, по умолчанию css вшиваться в js
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // Плагин для прокидывание глобальнных переменных в проект
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
    ];

    if (isDev) {
        plugins.push(
            // Плагины для dev-server, обновление страницы без перезагрузки
            new webpack.HotModuleReplacementPlugin(),
            // overlay:false убирает iframe
            new ReactRefreshWebpackPlugin({ overlay: false }),
            // Плагин для анализа бандла
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),

        );
    }

    return plugins;
}
