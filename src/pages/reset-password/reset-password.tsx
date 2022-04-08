import style from './reset-password.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import { resetPassword } from '../../services/actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import ModalOverlay from '../../components/modal/modal-overlay/modal-overlay';
import { CircularProgress } from '@mui/material';
import { TLocation } from '../../utils/types'
import { FC } from 'react'

export const ResetPassword: FC = () => {
  const { loader, userData, forgotSuccess } = useSelector((store: any) => store.auth)

  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation<TLocation>()
  const [data, setData] = useState({
    password: '',
    token: '',
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
      dispatch(resetPassword(data))
      history.replace('/login')
    } catch (error) {
      console.error(error)
    } finally {
      setData({
        password: '',
        token: '',
      })
    }
  }

  if (userData) {
    return <Redirect to={location?.state?.from || '/'} />
  }

  if (!forgotSuccess) {
    return <Redirect to='/forgot-password' />
  }

  return (
    <>
      <form className={style.resetPassword} onSubmit={handleSubmit}>
        <h2 className={style.title}>Восстановление пароля</h2>
        <div className={style.input}>
          <Input
            type='password'
            placeholder='Введите новый пароль'
            onChange={handleChange}
            value={data.password}
            name='password'
            error={false}
            errorText='Ошибка'
            size='default'
          />
        </div>
        <div className={style.input}>
          <Input
            type='text'
            placeholder='Введите код из письма'
            onChange={handleChange}
            value={data.token}
            name='token'
            error={false}
            errorText='Ошибка'
            size='default'
          />
        </div>
        {data.password && data.token &&
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