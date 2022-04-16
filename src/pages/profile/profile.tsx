import style from './profile.module.css'
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom'
import { logout } from '../../services/actions/auth'
import { useDispatch, useSelector } from '../../services/hooks';
import { FC, useEffect } from 'react'
import UserProfile from '../../components/user-profile/user-profile';
import FeedList from '../../components/feed-list/feed-list';
import { wsConnectionClose, wsConnectionStart } from '../../services/actions/feed';
import { getCookie } from '../../utils/helpers';

export const ProfilePage: FC = () => {
  const dispatch = useDispatch()
  const { path } = useRouteMatch();
  const { feed } = useSelector(store => store.feed)

  const onLogout = () => {
    dispatch(logout())
  }

  useEffect(
    () => {
      const accessToken = getCookie('accessToken')
      if (accessToken) {
        const authToken = accessToken.split('Bearer ')[1];
        dispatch(wsConnectionStart(`wss://norma.nomoreparties.space/orders?token=${authToken}`))
      }
      return () => {
        dispatch(wsConnectionClose())
      }
    }, [dispatch]
  )

  return (
    feed &&
    <section className={style.profile}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <NavLink className={style.link} activeClassName={style.active} exact to="/profile">Профиль</NavLink>
          </li>
          <li>
            <NavLink className={style.link} activeClassName={style.active} to="/profile/orders">История заказов</NavLink>
          </li>
          <li>
            <button className={style.button} onClick={onLogout}>
              Выход
            </button>
          </li>
        </ul>
        <p className={style.caption}>
          В этом разделе вы можете
          изменить свои персональные данные
        </p>
      </nav>
      <Switch>
        <Route exact path={`${path}`}>
          <UserProfile />
        </Route>
        <Route path={`${path}/orders`}>
          <FeedList orders={feed?.orders} />
        </Route>
      </Switch>
    </section>
  )
}
