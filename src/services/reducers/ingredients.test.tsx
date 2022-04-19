import { addIngredient, closeOrderModal, deleteIngredient, initialState, openIngredientModal, openOrderModal, sortCart, swithTab } from './ingredients';
import ingredientsReducer from './ingredients';
import { AnyAction } from "redux";
import { TIngredientState } from '../types/ingredients'
import { getIngredients, sendOrder } from '../actions/ingredients';


describe('ingredientsReducer', () => {

  it('return initial state', () => {
    expect(ingredientsReducer(undefined, {} as AnyAction)).toEqual(initialState);
  })

  it('swithTab', () => {

    const expected: TIngredientState = {
      ...initialState,
      currentTab: 'string'
    };

    expect(ingredientsReducer(initialState, swithTab('string'))).toEqual(expected)
  })

  it('openIngredientModal', () => {

    const expected: TIngredientState = {
      ...initialState,
      ingredientModal: true,
      ingredient: {
        "_id": "60d3b41abdacab0026a733c6",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
      },
    };

    expect(ingredientsReducer(initialState, openIngredientModal({
      "_id": "60d3b41abdacab0026a733c6",
      "name": "Краторная булка N-200i",
      "type": "bun",
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0
    }))).toEqual(expected)
  })

  it('deleteIngredient', () => {
    const origin = {
      ...initialState,
      cart: [{
        "_id": "60d3b41abdacab0026a733c6",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
      },]
    }

    const expected: TIngredientState = {
      ...initialState,
      cart: []
    };

    expect(ingredientsReducer(origin, deleteIngredient('6db03372-4b24-442e-985c-6df1c475c0da'))).toEqual(expected)
  })

  it('addIngredient', () => {

    const expected: TIngredientState = {
      ...initialState,
      cart: [{
        "_id": "60d3b41abdacab0026a733c6",
        "name": "Краторная булка N-200i",
        "type": "bun",
        "proteins": 80,
        "fat": 24,
        "carbohydrates": 53,
        "calories": 420,
        "price": 1255,
        "image": "https://code.s3.yandex.net/react/code/bun-02.png",
        "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
        "__v": 0
      }]
    };

    expect(ingredientsReducer(initialState, addIngredient({
      "_id": "60d3b41abdacab0026a733c6",
      "name": "Краторная булка N-200i",
      "type": "bun",
      "proteins": 80,
      "fat": 24,
      "carbohydrates": 53,
      "calories": 420,
      "price": 1255,
      "image": "https://code.s3.yandex.net/react/code/bun-02.png",
      "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
      "__v": 0
    }))).toEqual(expected)
  })

  it('sortCart', () => {

    const expected: TIngredientState = {
      ...initialState,
      cart: []
    };

    expect(ingredientsReducer(initialState, sortCart({
      dragIndex: 1,
      hoverIndex: 2
    }))).toEqual(expected)
  })

  it('openOrderModal', () => {

    const expected: TIngredientState = {
      ...initialState,
      orderModal: true
    };

    expect(ingredientsReducer(initialState, openOrderModal())).toEqual(expected)
  })

  it('closeOrderModal', () => {

    const expected: TIngredientState = {
      ...initialState,
      orderModal: false
    };

    expect(ingredientsReducer(initialState, closeOrderModal())).toEqual(expected)
  })

  it('getIngredients pending', () => {

    const expected: TIngredientState = {
      ...initialState,
      ingredientsRequest: true,
      ingredientsFailed: false,
      loader: true,
    };

    expect(ingredientsReducer(initialState, getIngredients.pending(''))).toEqual(expected)
  })

  it('getIngredients fulfilled', () => {

    const expected: TIngredientState = {
      ...initialState,
      ingredients: [
        {
          "_id": "60d3b41abdacab0026a733c6",
          "name": "Краторная булка N-200i",
          "type": "bun",
          "proteins": 80,
          "fat": 24,
          "carbohydrates": 53,
          "calories": 420,
          "price": 1255,
          "image": "https://code.s3.yandex.net/react/code/bun-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
          "__v": 0
        }
      ],
      ingredientsRequest: false,
      loader: false,
    };

    expect(ingredientsReducer(initialState, getIngredients.fulfilled(
      [
        {
          "_id": "60d3b41abdacab0026a733c6",
          "name": "Краторная булка N-200i",
          "type": "bun",
          "proteins": 80,
          "fat": 24,
          "carbohydrates": 53,
          "calories": 420,
          "price": 1255,
          "image": "https://code.s3.yandex.net/react/code/bun-02.png",
          "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
          "__v": 0
        }
      ],
      '',
    ))).toEqual(expected)
  })

  it('getIngredients rejected', () => {

    const expected: TIngredientState = {
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: true,
      loader: false,
    };

    expect(ingredientsReducer(initialState, getIngredients.rejected(
      new Error(),
      '',
    ))).toEqual(expected)
  })

  it('sendOrder pending', () => {

    const expected: TIngredientState = {
      ...initialState,
      loader: true,
      orderRequest: true,
      orderFailed: false,
    };

    expect(ingredientsReducer(initialState, sendOrder.pending('', [
      '60d3b41abdacab0026a733c6',
    ]))).toEqual(expected)
  })

  it('sendOrder fulfilled', () => {

    const expected: TIngredientState = {
      ...initialState,
      order: { number: 123, },
      orderRequest: false,
      loader: false,
      orderModal: true,
      cart: [],
    };

    expect(ingredientsReducer(initialState, sendOrder.fulfilled(
      { number: 123 },
      '',
      ["60d3b41abdacab0026a733c6"]
    ))).toEqual(expected)
  })

  it('sendOrder rejected', () => {

    const expected: TIngredientState = {
      ...initialState,
      orderRequest: false,
      orderFailed: true,
      loader: false,
      orderModal: false,
    };

    expect(ingredientsReducer(initialState, sendOrder.rejected(
      new Error(),
      '',
      ["60d3b41abdacab0026a733c6"]
    ))).toEqual(expected)
  })

})