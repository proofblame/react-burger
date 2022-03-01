import styles from './modal-overlay.module.css'
import { modalOverlayPropTypes } from '../../../utils/types'

const ModalOverlay = ({ children, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
      {children}
    </div>
  )
}

ModalOverlay.propTypes = modalOverlayPropTypes.isRequired

export default ModalOverlay 
