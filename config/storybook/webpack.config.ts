// Настройка webpack для storybook

import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { styleLoader, svgLoader } from '../build/buildLoaders';

export default ({ config }:{config: webpack.Configuration}) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    // Настройки для атносительнных путей
    config!.resolve!.modules!.push(paths.src, 'node_modules');
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config!.resolve!.alias = {
        '@': paths.src,
    };

    // Удаляем встроенный loader для svg
    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    // Монтируем свой loader для svg
    config!.module!.rules!.push(styleLoader(true), svgLoader());

    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(''),
    }));

    return config;
};
