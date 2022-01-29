import styles from './modal-overlay.module.css'

const ModalOverlay = ({ onClose, active, children }) => {
  return (
    <div className={active ? ` ${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={onClose}>
      {children}
    </div>
  )
}

export default ModalOverlay 
