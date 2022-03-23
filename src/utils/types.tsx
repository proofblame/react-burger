import { LegacyRef, ReactNode } from 'react'
import { Location } from "history";

export type TIngredientDetails = {
  _id: string
  name: string
  type: string
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
  __v: number
  uid?: string | undefined
}


export type THeaderButton = {
  children: ReactNode
  text: string
  path: string
}

export type TConstructorIngredient = {
  ingredient: TIngredientDetails
  index: number
  onMove?: any
}

export type TStuffList = {
  target: any
  onHover: any
}

export type TIngredientsList = {
  ingredients: Array<TIngredientDetails>
  title: string
}

export type TDndField = {
  target: LegacyRef<HTMLDivElement>
  onHover: any
  text: string
}
export type TModalOverlay = {
  children: ReactNode,
  onClose?: any,
}


export type TModal = {
  header?: string
  children: ReactNode
  onClose: any
}

export type TUseSwitchTabs = {
  switchTab: any,
}
export type TSmoothSettings = {
  block: string
  behavior: string
}
export type TBurgerIngredient = {
  ingredient: TIngredientDetails
}
export type TIngredientId = {
  id: string;
}
export type TLocation = {
  from: Location;
  background?: Location;
}
