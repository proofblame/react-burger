import style from './register.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { registerUser } from '../../services/actions/auth'
import { useDispatch } from 'react-redux';

export const Register = () => {
  const dispatch = useDispatch()
  const history = useHistory()

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
      dispatch(registerUser(data))
      history.push('/')
    } catch (error) {
      console.error(error)
    } finally {
      setData({
        name: '',
        email: '',
        password: '',
      })
    }
  }


  return (
    <form className={style.register} onSubmit={handleSubmit}>
      <h2 className={style.title}>Регистрация</h2>
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
          Зарегистрироваться
        </Button>
      </div>

      <p className={style.caption}>
        Уже зарегистрированы?&nbsp;
        <Link to="/login" className={style.link}>
          Войти
        </Link>
      </p>

    </form>
  )
}