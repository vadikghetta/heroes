export interface  IWebpackPaths  {
    entry : string
    html : string
    output : string
    publicFolder : string
}

export type TMode = "production" | "development";

export interface IWebpackOptions  {
    port : number
    paths: IWebpackPaths
    mode : TMode
    analizer : boolean
    src : string
}

export interface IEnvVarsType {
    mode : TMode
    port : number
    anlizer : boolean
    paths: IWebpackOptions;
    analyzer?: boolean;
}