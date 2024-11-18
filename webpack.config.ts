import path from "path";
import webpack from "webpack";
import { IWebpackPaths, IEnvVarsType } from "./src/types/webpack.types";
import {buildWebpack} from "./config/build_webpack";

export default (env : IEnvVarsType) =>
{
	const paths : IWebpackPaths = {
		entry : path.resolve(__dirname, "src", "index.tsx"),
		output : path.resolve(__dirname, "build"),
		html : path.resolve(__dirname, "public", "index.html"),
		publicFolder : path.resolve(__dirname, "public")
	};
	const config : webpack.Configuration = buildWebpack({
		port : env.port ?? 3003,
		mode : env.mode ?? "development",
		paths,

		analizer : env.anlizer ?? false,
		src : path.resolve(__dirname, "src")
	});

	return config;
};


