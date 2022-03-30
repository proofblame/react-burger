export type TIngredient = {
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

export type TOrder = {
  number: number
}

export type TIngredientState = {
  ingredients: Array<TIngredient>
  ingredientsRequest: boolean
  ingredientsFailed: boolean
  currentTab: string
  ingredient: TIngredient | null
  ingredientModal: boolean
  cart: Array<TIngredient>
  order: TOrder | null
  orderModal: boolean
  orderRequest: boolean
  orderFailed: boolean
  loader: boolean
}

