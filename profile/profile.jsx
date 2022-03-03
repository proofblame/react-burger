import style from './profile.module.css'
import { NavLink } from 'react-router-dom'
import { useState, useRef } from 'react'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'

export const Profile = () => {
  const [value, setValue] = useState('value')
  const inputRef = useRef(null)
  const onIconClick = () => {

    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')

  }


  return (
    <section className={style.profile}>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li>
            <NavLink className={style.link} activeClassName='active'>Профиль</NavLink>
          </li>
          <li>
            <NavLink className={style.link} activeClassName='active'>История заказов</NavLink>
          </li>
          <li>
            <NavLink className={style.link} activeClassName='active'>Выход</NavLink>
          </li>
        </ul>
        <p className={style.caption}>
          В этом разделе вы можете
          изменить свои персональные данные
        </p>
      </nav>

      {/* <form className={style.register}>
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

      </form> */}
    </section>
  )
}
