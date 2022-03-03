import style from './reset-password.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export const ResetPassword = () => {


  const [value, setValue] = useState('value')
  const inputRef = useRef(null)
  const onIconClick = () => {

    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')

  }


  return (
    <form className={style.resetPassword}>
      <h2 className={style.title}>Восстановление пароля</h2>
      <div className={style.input}>
        <Input
          type={'password'}
          placeholder={'Введите новый пароль'}
          onChange={e => setValue(e.target.value)}
          value={value}
          name={'name'}
          error={false}
          ref={inputRef}
          icon={'ShowIcon'}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className={style.input}>
        <Input
          type={'password'}
          placeholder={'Введите код из письма'}
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