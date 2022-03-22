import styles from './modal-overlay.module.css'
import { TModalOverlay } from '../../../utils/types'

const ModalOverlay = ({ children, onClose }: TModalOverlay) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      {children}
    </div>
  )
}

export default ModalOverlay 
