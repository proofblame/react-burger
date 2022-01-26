import styles from './app-header.module.css'
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import HeaderButton from '../header-button/header-button'

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <HeaderButton text='Конструктор'>
          <BurgerIcon type="primary" />
        </HeaderButton>
        <HeaderButton text='Лента заказов' inActive={true}>
          <ListIcon type="secondary" />
        </HeaderButton>
      </nav>
      <Logo />
      <HeaderButton text=' Личный кабинет' inActive={true}>
        <ProfileIcon type="secondary" />
      </HeaderButton>
    </div>
  )
};

export default AppHeader;
