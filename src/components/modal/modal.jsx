import styles from './modal.module.css'
import ModalOverlay from './modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useEffect } from 'react'
import ReactDOM from 'react-dom';
import { modalPropTypes } from '../../utils/types'
const modalRoot = document.getElementById("modals");

const Modal = ({ header, onClose, children }) => {



  useEffect(() => {
    const handleEscapePress = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    };

    document.addEventListener('keydown', handleEscapePress);

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    }

  }, [onClose])




  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h3 className={styles.title}>
            {header}
          </h3>
          <div className={styles.close} onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
        </div>
        {children}
      </div>
    </ModalOverlay>
    , modalRoot)
}

Modal.propTypes = modalPropTypes.isRequired

export default Modal
