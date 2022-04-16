
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import OrderInfo from '../../components/order-info/order-info'
import { wsConnectionClose, wsConnectionStart } from '../../services/actions/feed'
import { useDispatch } from '../../services/hooks'
import { getCookie } from '../../utils/helpers'

import style from './order-info-page.module.css'

const OrderInfoPage = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(
    () => {
      if (location.pathname.indexOf('/feed') === 0) {
        dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders/all`))
      } else {
        const accessToken = getCookie('accessToken')
        if (accessToken) {
          const authToken = accessToken.split('Bearer ')[1];
          dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${authToken}`))
        }
      }
      return () => {
        dispatch(wsConnectionClose())
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