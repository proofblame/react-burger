import styles from './app-header.module.css'
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import HeaderButton from './header-button/header-button'

const AppHeader = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <HeaderButton text='Конструктор' exact path='/'>
          <BurgerIcon type="secondary" />
        </HeaderButton>
        <HeaderButton text='Лента заказов' exact path='/'>
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
