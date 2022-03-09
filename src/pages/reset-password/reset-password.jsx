import style from './reset-password.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { resetPassword } from '../../services/actions/auth'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

export const ResetPassword = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const [data, setData] = useState({
    password: '',
    token: '',
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
      dispatch(resetPassword(data))
      history.push('/')
    } catch (error) {
      console.error(error)
    } finally {
      setData({
        password: '',
        token: '',
      })
    }
  }


  return (
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
          type='token'
          placeholder='Введите код из письма'
          onChange={handleChange}
          value={data.token}
          name='token'
          error={false}
          errorText='Ошибка'
          size='default'
        />
      </div>
      <div className={style.button}>
        <Button type="primary" size="medium">
          Восстановить
        </Button>
      </div>

      <p className={style.caption}>
        Вспомнили пароль?&nbsp;
        <Link to="/login" className={style.link}>
          Войти
        </Link>
      </p>

    </form>
  )
}