import styles from './constructor-ingredient.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux';
import { deleteIngredient } from '../../../services/reducers/ingredients'

const ConstructorIngredient = ({ ingredient }) => {
  const { name, price, image, _id } = ingredient

  const dispatch = useDispatch();

  const handleDeleteIngredient = (id) => {
    dispatch(deleteIngredient(id))
  }

  return (
    <li className={styles.burgerElement}>
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleDeleteIngredient(_id)}
      />
    </li>
  )
}

export default ConstructorIngredient