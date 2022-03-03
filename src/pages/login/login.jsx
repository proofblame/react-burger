import style from './login.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {


  const [value, setValue] = useState('value')
  const inputRef = useRef(null)
  const onIconClick = () => {

    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')

  }


  return (
    <form className={style.login}>
      <h2 className={style.title}>Вход</h2>
      <div className={style.input}>
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => setValue(e.target.value)}
          value={value}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className={style.input}>
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={e => setValue(e.target.value)}
          icon={'ShowIcon'}
          value={value}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
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
  )
}