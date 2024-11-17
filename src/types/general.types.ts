export type TElement = "fire" | "all" | "wind" | "water" | "earth";
export type TStatusType = "idle" | "loading" | "error";



export enum ROUTES {
    HEROES = "/heroes",
    FILTERS = "/filters"
}
export enum METODS_CONSTANTS {
    GET = "GET",
    POST = "POST",
    PUTCH = "PUTCH",
    DELETE = "DELETE"
}
 
export interface IForm {
    name: string
    description: string
    element: TElement
}