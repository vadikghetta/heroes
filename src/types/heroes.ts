import { TElement } from "./general.types";

export type THeroesRoot = IHeroesItem[]

export interface IHeroesItem {
  createdAt: string
  name: string
  avatar: string
  description: string
  element: TElement
  id: string
}
