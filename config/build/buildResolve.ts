import {BuildOptions} from "./types/config";

export function buildResolve(options: BuildOptions): {
    extensions: string[];
    preferAbsolute: boolean;
    alias: {};
    mainFiles: string[];
    modules: string[]
}{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}