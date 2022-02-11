
import styles from './dnd-field.module.css'

const DndField = ({ target, text, onHover }) => {

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