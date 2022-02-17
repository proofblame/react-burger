import styles from './modal-overlay.module.css'
import { modalOverlayPropTypes } from '../../../utils/types'

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      {children}
    </div>
  )
}

ModalOverlay.propTypes = modalOverlayPropTypes.isRequired

export default ModalOverlay 
