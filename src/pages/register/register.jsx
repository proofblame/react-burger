import style from './register.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {


  const [value, setValue] = useState('value')
  const inputRef = useRef(null)
  const onIconClick = () => {

    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')

  }


  return (
    <form className={style.register}>
      <h2 className={style.title}>Регистрация</h2>
      <div className={style.input}>
        <Input
          type={'text'}
          placeholder={'Имя'}
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