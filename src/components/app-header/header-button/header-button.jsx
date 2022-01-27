import styles from './header-button.module.css'

const HeaderButton = ({ children, text, inActive }) => {
  return (
    <button className={styles.button}>
      {children}
      <span className={`text text_type_main-default ${inActive ? 'text_color_inactive' : ''}`}>
        {text}
      </span>
    </button>
  );
};

export default HeaderButton;
