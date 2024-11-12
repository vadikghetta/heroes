
import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import { IWebpackOptions } from "../src/types/webpack.types";


export function createDevServer  (options : IWebpackOptions): DevServerConfiguration  {
	return {
		port : options.port ?? 3000,
		open : true,
		historyApiFallback : true,
		hot : true
	};
}