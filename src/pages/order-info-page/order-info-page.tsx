import { useEffect } from 'react'
import OrderInfo from '../../components/order-info/order-info'
import { wsConnectionStart } from '../../services/actions/feed'
import { useDispatch } from '../../services/hooks'
import style from './order-info-page.module.css'

const OrderInfoPage = () => {
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders/all`))

      return () => {
        // dispatch(wsConnectionClose())
      }
    }, [dispatch]
  )
  return (
    <section className={style.section}>
      <OrderInfo />
    </section>
  )
}

export default OrderInfoPage