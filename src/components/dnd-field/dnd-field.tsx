
import styles from './dnd-field.module.css'
import { TDndField } from '../../utils/types'

const DndField = ({ target, text, onHover }: TDndField) => {

  const classes = `${styles.wrapper} ${styles.borderColor}`

  const borderColor = onHover ? classes : styles.wrapper

  return (
    <section className={styles.field}>
      <div className={borderColor} ref={target}>
        <p className={styles.title}>{text}</p>
      </div>
    </section >
  )
}


export default DndField