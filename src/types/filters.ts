export type TFilterRoot = IFilterItem[]

export interface IFilterItem {
  name: TTypeFilter
  label: string
  className: string
  id: string
}

export type TTypeFilter = "all" | "fire" | "water" | "wind" | "earth";
