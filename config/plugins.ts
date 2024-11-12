import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration} from "webpack";
import { IWebpackOptions } from "../src/types/webpack.types";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import CopyWebpackPlugin  from "copy-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import Dotenv from "dotenv-webpack";

export function createPlugins ({mode, paths : {html, publicFolder, output}, analizer} : IWebpackOptions) : Configuration["plugins"]  {

	const isDev = mode === "development";
	const isProd = mode === "production";
	const plugins : Configuration["plugins"] = [
		new HtmlWebpackPlugin({
			template: html,
			favicon : path.resolve(publicFolder, "favicon.ico")

		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: path.resolve(publicFolder, "assets"), to: path.resolve(output, "assets"), noErrorOnMissing : true }
			]
		}),
		new ForkTsCheckerWebpackPlugin(),
		new Dotenv()
        
	];
	if(isDev) {
		plugins.push(
			new webpack.ProgressPlugin(),
			new ReactRefreshPlugin()
		);
	}
	if(isProd) {
		plugins.push(new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:8].css",
			chunkFilename: "css/[name].[contenthash:8].css"
		}));
	}
	if(analizer) {
		plugins.push(new BundleAnalyzerPlugin());
	}
	return plugins;
}