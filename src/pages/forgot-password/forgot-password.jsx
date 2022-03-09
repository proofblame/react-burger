import style from './forgot-password.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../services/actions/auth';
import { useHistory } from 'react-router-dom'

export const ForgotPassword = () => {

  const history = useHistory()
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
      history.push('/reset-password')
    } catch (error) {
      console.error(error)
    } finally {
      setData({
        email: '',
      })
    }
  }


  return (
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