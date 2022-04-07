import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from '../../services/hooks'
import { TOrder } from '../../services/types/feed'
import { TSelectedIngredient } from '../../services/types/ingredients'
import { OrderStatusTranslate } from '../../utils/helpers'
import { OrderStatus, TIngredientDetails, TIngredientId } from '../../utils/types'
import style from './order-info.module.css'
import { v4 } from "uuid";
import dayjs from 'dayjs'

const OrderInfo = () => {
  const { id } = useParams<TIngredientId>()
  const { feed } = useSelector((store: any) => store.feed)
  const { ingredients } = useSelector((store: any) => store.ingredients)


  const order = useMemo(
    () => {
      return feed?.orders.find((order: TOrder) => order._id === id)
    },
    [feed, id]
  );

  const orderIngredients = useMemo(
    () => {
      let result = new Array<TSelectedIngredient & { count: number }>();

      order?.ingredients?.forEach((value: string) => {
        if (value && !result.find(a => a._id === value)) {
          let count = order?.ingredients?.filter((a: any) => a === value).reduce((x: number) => x + 1, 0);
          result.push({
            key: v4(), ...ingredients.find((a: { _id: any }) => a._id === value),
            count: count
          } as TSelectedIngredient & { count: number });
        }
      });

      return result;
    },
    [order, ingredients]
  );

  const totalPrice = useMemo(
    () => {
      if (orderIngredients && orderIngredients.length > 0) {
        return orderIngredients.reduce((x, obj) => x + obj.price, 0);
      }

      return 0;
    },
    [orderIngredients]
  );

  console.log(order)
  console.log(orderIngredients)

  return (
    feed &&
    <section className={style.section}>
      <p className={style.number}>#{order.number}</p>
      <div className={style.titleWrapper}>
        <h3 className={style.title}>{order.name}</h3>
        <p className={order.status === OrderStatus.DONE ? style.statusDone : style.status}>{OrderStatusTranslate.get(order.status)}</p>
      </div>
      <h3 className={style.structure}>Состав:</h3>
      <div className={style.listWrapper}>
        <ul className={style.list}>
          {
            orderIngredients.map((ingredient) => (
              <li key={ingredient.key}>
                <span className={style.imageWrapper}>
                  <img src={ingredient.image} alt={ingredient.name} />
                </span>
                <p className={style.ingredientTitle}>{ingredient.name}</p>
                <span className={style.price}>
                  <span className={style.ingredientSum}>{ingredient.count} x {ingredient.price}</span>
                  <CurrencyIcon type="primary" />
                </span>
              </li>
            ))
          }

        </ul>
      </div>
      <div className={style.wrapper}>
        <span className={style.date}>{dayjs(order.createdAt).format("HH:mm DD MMM YY")}</span>
        <span className={style.price}>
          <span className={style.ingredientSum}>{totalPrice}</span>
          <CurrencyIcon type="primary" />
        </span>
      </div>
    </section>
  )
}

export default OrderInfo