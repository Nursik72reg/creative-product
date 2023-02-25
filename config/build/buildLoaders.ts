import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

// @babel/preset-env преобразует новый стандарт в ES2015
export const babelLoader = () => ({
    test: /\.(ts|tsx|js)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
        },
    },
});

export const fileLoader = () => ({
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
        {
            loader: 'file-loader',
        },
    ],
});

export const svgLoader = () => ({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
});

export const styleLoader = (isDev: boolean) => ({
    test: /\.(sc|sa|c)ss$/i,
    use: [
        // Вшивает стили в js или отделяет в отдельный файл
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Преобразует css в commonJs
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (resourcePath: string) => resourcePath.includes('.module.'),
                    localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
                },

            },
        },
        // Загузчик Sass в css
        'sass-loader',
    ],
});

export const typescriptLoader = () => ({
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
});

export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[] {
    const { isDev } = options;

    return [
        babelLoader(),
        typescriptLoader(),
        styleLoader(isDev),
        svgLoader(),
        fileLoader(),
    ];
}
