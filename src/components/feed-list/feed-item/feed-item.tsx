import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import { TOrder } from '../../../services/types/feed';
import style from './feed-item.module.css'
import dayjs from 'dayjs'
import { useSelector } from '../../../services/hooks';
import { useMemo } from 'react';
import { TSelectedIngredient } from '../../../services/types/ingredients';
import { v4 } from "uuid";
import { OrderStatus } from '../../../utils/types';
import { OrderStatusTranslate } from '../../../utils/helpers';

const FeedItem = ({ status, order }: { status?: boolean, order: TOrder }) => {
  const location = useLocation();
  const { path } = useRouteMatch();
  const { ingredients } = useSelector(store => store.ingredients);

  const orderIngredients = useMemo(
    () => {
      let result = new Array<TSelectedIngredient>();

      order.ingredients?.forEach(value => {
        if (value) {
          result.push({ key: v4(), ...ingredients.find(a => a._id === value) } as TSelectedIngredient);
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
  console.log(path)
  console.log(order)
  return (
    order &&
    <li className={style.section}>
      <Link key={location.key} className={style.link} to={{ pathname: `${path}/${order._id}`, state: { background: location } }}>
        <div className={style.wrapper}>
          <span className={style.number}>#{order.number}</span>
          <span className={style.date}>{dayjs(order.createdAt).format("HH:mm DD MMM YY")}</span>
        </div>
        <div>
          <h3 className={style.title}>{order.name}</h3>
          {status === true && <p className={order.status === OrderStatus.DONE ? style.statusDone : style.status}>{OrderStatusTranslate.get(order.status)}</p>}
        </div>
        <div className={style.wrapper}>
          <ul className={style.list}>
            {orderIngredients.length > 6 &&
              (
                <li>
                  <span className={style.counter}>+{orderIngredients.length - 5}</span>
                </li>
              )
            }
            {
              orderIngredients?.slice(0, orderIngredients.length > 6 ? 5 : 6)
                .map((item) =>
                (
                  <li key={item.key}>
                    <img src={item.image_mobile} alt={item.name} />
                  </li>
                ))
            }
          </ul>
          <p className={style.price}>
            <span>{totalPrice}</span>
            <CurrencyIcon type="primary" />
          </p>
        </div>
      </Link>
    </li>
  )
}

export default FeedItem