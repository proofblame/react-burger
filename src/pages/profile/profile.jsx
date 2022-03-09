import style from './profile.module.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { updateUser, logout } from '../../services/actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'


export const Profile = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { userData } = useSelector(store => store.auth)

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUser(data))
    } catch (error) {
      console.error(error)
    }
  }
  const onLogout = () => {
    dispatch(logout())
  }

  useEffect(
    () => {
      if (userData) {
        const { name, email } = userData
        setData({
          name,
          email,
          password: '',
        })
      }
    }, [userData]
  )

  return (
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
            <button type="secondary" size="large" className={style.button} onClick={onLogout}>
              Выход
            </button>
          </li>
        </ul>
        <p className={style.caption}>
          В этом разделе вы можете
          изменить свои персональные данные
        </p>
      </nav>

      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.input}>
          <Input
            type='text'
            placeholder='Имя'
            onChange={handleChange}
            value={data.name}
            name='name'
            error={false}
            errorText='Ошибка'
            size='default'
          />
        </div>
        <div className={style.input}>
          <Input
            type='email'
            placeholder='E-mail'
            onChange={handleChange}
            value={data.email}
            name='email'
            error={false}
            errorText='Ошибка'
            size='default'
          />
        </div>
        <div className={style.input}>
          <Input
            type='password'
            placeholder='Пароль'
            onChange={handleChange}
            value={data.password}
            name='password'
            error={false}
            errorText='Ошибка'
            size='default'
          />
        </div>
        <div className={style.button}>
          <Button type="primary" size="medium">
            Сохранить
          </Button>
        </div>

      </form>
    </section>
  )
}
