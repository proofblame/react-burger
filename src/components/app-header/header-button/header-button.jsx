import styles from './header-button.module.css'
import { NavLink } from 'react-router-dom';
import { headerButtonPropTypes } from '../../../utils/types';

const HeaderButton = ({ children, text, path }) => {
  return (
    <NavLink className={styles.button} exact to={path} activeClassName={styles.active}>
      {children}
      <span className={styles.caption}>
        {text}
      </span>
    </NavLink>
  );
};

HeaderButton.propTypes = headerButtonPropTypes.isRequired

export default HeaderButton;
