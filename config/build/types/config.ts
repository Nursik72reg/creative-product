export interface BuildPath {
    entry: string,
    build: string,
    html: string,
    src: string
}

export type BuildMode = 'production' | 'development'

export interface BuildEnv {
    mode: BuildMode,
    PORT: number,
    apiUrl: string
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPath,
    isDev: boolean
    port: number,
    apiUrl: string
}
