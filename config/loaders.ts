import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IWebpackOptions } from "../src/types/webpack.types";



export function createLoaders  (options : IWebpackOptions) : ModuleOptions["rules"] {
	const isDev = options.mode === "development" ? true : false;
	const cssModules =   {
		loader: "css-loader",
		options: {
			modules: {
				auto : true,
				localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]"
			} 
		}
	};
	const assetLoader =    {
		test: /\.(png|jpg|gif)$/i,
		use: [
			{
				loader: "file-loader",
				options: {
					limit: 8192
				}
			}
		],

		type: "javascript/auto"
	};
	const sassLoader =  {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			cssModules,
			{
				loader: "sass-loader",
				options: {
					api: "modern-compiler",
					sassOptions: {
						outputStyle: "compressed"
					}
				}
			}
		]
	};

	const svgrLoader = {
		test: /\.svg$/i,
		use: [
			{
				loader: "@svgr/webpack",
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: "convertColors",
								params: {
									currentColor: true
								}
							}
						]
					}
				}
			}
		]
	};
	//   вместо бабеля и ts-loader решил попробовать swc loader
	const swcLoader =  {
		test: /\.(ts|tsx)$/,
		exclude: /(node_modules|bower_components)/,
		use: {
			loader: "swc-loader",
			options: {
				jsc: {
					parser: {
						syntax: "typescript",
						tsx: true
					},
					transform : {
						react : {
							runtime : "automatic"
						}
					}
				}
			}
		}
  
	};
	return [
		sassLoader,
		svgrLoader,
		assetLoader,
		swcLoader
	];
}