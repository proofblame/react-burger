import style from './login.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from '../../services/hooks';
import { loginUser } from '../../services/actions/auth';
import ModalOverlay from '../../components/modal/modal-overlay/modal-overlay';
import { CircularProgress } from '@mui/material';
import { TLocation } from '../../utils/types';
import { FC } from 'react';

export const Login: FC = () => {
  const { userData, loader } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const location = useLocation<TLocation>()
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      dispatch(loginUser(data))
    } catch (error) {
      console.error(error)
    } finally {
      setData({
        email: '',
        password: '',
      })
    }
  }

  if (userData) {
    return <Redirect to={location?.state?.from || '/'} />
  }

  return (
    <>
      <form className={style.login} onSubmit={handleSubmit}>
        <h2 className={style.title}>Вход</h2>
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
            Войти
          </Button>
        </div>

        <p className={style.caption}>
          Вы — новый пользователь?&nbsp;
          <Link to="/register" className={style.link}>
            Зарегистрироваться
          </Link>
        </p>


        <p className={style.caption}>
          Забыли пароль?&nbsp;
          <Link to="/forgot-password" className={style.link}>
            Восстановить пароль
          </Link>
        </p>

      </form>
      {
        loader &&
        <ModalOverlay>
          <CircularProgress className={style.loader} size="100px" />
        </ModalOverlay>
      }
    </>
  )
}