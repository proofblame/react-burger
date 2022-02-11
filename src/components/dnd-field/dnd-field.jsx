
import { forwardRef } from 'react'
import styles from './dnd-field.module.css'

const DndField = ({ target }) => {
  return (
    <section className={styles.field}>
      <div className={styles.wrapper} ref={target}>
        <p className={styles.title}>Выберите булку</p>
      </div>
    </section >
  )
}

export default DndField