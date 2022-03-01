import styles from './modal-overlay.module.css'

const ModalOverlay = ({ onClose, children }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      {children}
    </div>
  )
}

export default ModalOverlay 
