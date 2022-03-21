import style from './forgot-password.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect, useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../services/actions/auth';
import { useHistory } from 'react-router-dom'
import ModalOverlay from '../../components/modal/modal-overlay/modal-overlay';
import { CircularProgress } from '@mui/material';

export const ForgotPassword = () => {
  const { loader, userData, forgotSuccess } = useSelector(store => store.auth)
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: '',
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
      dispatch(forgotPassword(data))
    } catch (error) {
      console.error(error)
    } finally {
      setData({
        email: '',
      })
    }
  }


  if (userData) {
    return <Redirect to={location?.state?.from || '/'} />
  }

  if (forgotSuccess) {
    return <Redirect to='/reset-password' />
  }

  return (
    <>
      <form className={style.forgotPassword} onSubmit={handleSubmit}>
        <h2 className={style.title}>Восстановление пароля</h2>
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
        {data.email &&
          <div className={style.button}>
            <Button type="primary" size="medium">
              Восстановить
            </Button>
          </div>}

        <p className={style.caption}>
          Вспомнили пароль?&nbsp;
          <Link to="/login" className={style.link}>
            Войти
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