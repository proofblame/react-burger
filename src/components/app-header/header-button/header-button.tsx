
import styles from './header-button.module.css'
import { NavLink } from 'react-router-dom';
import { THeaderButton } from '../../../utils/types';

const HeaderButton = ({ children, text, path }: THeaderButton) => {
  return (
    <NavLink className={styles.button} exact to={path} activeClassName={styles.active}>
      {children}
      <span className={styles.caption}>
        {text}
      </span>
    </NavLink>
  );
};


export default HeaderButton;
