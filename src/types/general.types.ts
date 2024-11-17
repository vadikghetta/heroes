export type TElement = "fire" | "all" | "wind" | "water" | "earth";
export type TMetodType = "GET" | "POST" | "PUT" | "PUTCH" | "DELETE";
export type TStatusType = "idle" | "loading" | "error";



export enum ROUTES {
    HEROES = "/heroes",
    FILTERS = "/filters"
}

 
export interface IForm {
    name: string
    description: string
    element: TElement
}