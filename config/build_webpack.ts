
import webpack from "webpack";
import { IWebpackOptions } from "../src/types/webpack.types";
import { createDevServer } from "./server";
import { createPlugins } from "./plugins";
import { createLoaders } from "./loaders";
import { createResolvers } from "./resolvers";


export function buildWebpack  (options : IWebpackOptions) : webpack.Configuration {
	const {mode, paths} = options;
	const isDev = mode === "development" ? true : false;
	return {
		mode: mode ?? "development",
		entry: paths.entry,
		output : {
			filename: "js/[name].[contenthash].js",
			path: paths.output,
			clean: true
		},
		optimization : {
			splitChunks: {
				chunks: "all",
				minSize: 0,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: "vendors",
						chunks: "all"
					}
				}}
		},
		devtool: isDev ? "inline-source-map" : false,
		devServer : isDev ? createDevServer(options) : undefined,
		plugins: createPlugins(options),
		module: {
			rules: createLoaders(options)
		},
		resolve: createResolvers(options)
	};
}
