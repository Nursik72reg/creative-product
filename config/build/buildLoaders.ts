import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[]{
    const {isDev} = options

    // @babel/preset-env преобразует новый стандарт в ES2015
    const babelLoader =  {
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    const fileLoader = {
            test: /\.(png|jpe?g|gif|woff|woff2)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const styleLoader = {
            test: /\.(sc|sa|c)ss$/i,
            use: [
                // Вшивает стили в js или отделяет в отдельный файл
                isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                // Преобразует css в commonJs
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: (resourcePath: string) => resourcePath.includes('.module.'),
                            localIdentName: isDev ?  "[path][name]__[local]--[hash:base64:8]":  "[hash:base64:8]"
                        },

                    },
                },
                // Загузчик Sass в css
                "sass-loader",
            ],
        }

    const typescriptLoader =  {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return  [
        babelLoader,
        typescriptLoader,
        styleLoader,
        svgLoader,
        fileLoader
    ]
}