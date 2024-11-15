import { TElement } from "@/types/general.types";

export interface IItemProps {
    name : string
    description : string
    element : TElement
    onDelete  :()  => void
}
