
export type TOrder = {
  number: number,
  ingredients?: ReadonlyArray<string>,
  _id?: string,
  status?: string | undefined,
  createdAt?: Date,
  updatedAt?: Date,
  name?: string,
  owner?: string,
}

export type TFeed = {
  success: boolean,
  orders: Array<TOrder>,
  total: number,
  totalToday: number,
}

export type TFeedState = {
  feed: null | TFeed,
  wsConnected: boolean,
}
