import styles from './app-header.module.css'
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import HeaderButton from './header-button/header-button'
import { FC } from 'react'

const AppHeader: FC = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <HeaderButton text='Конструктор' path='/'>
          <BurgerIcon type="secondary" />
        </HeaderButton>
        <HeaderButton text='Лента заказов' path='/feed'>
          <ListIcon type="secondary" />
        </HeaderButton>
      </nav>
      <Logo />
      <HeaderButton text='Личный кабинет' path='/profile'>
        <ProfileIcon type="secondary" />
      </HeaderButton>
    </div >
  )
};

export default AppHeader;
