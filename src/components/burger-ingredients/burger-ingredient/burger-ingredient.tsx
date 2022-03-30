import styles from './burger-ingredient.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from '../../../services/hooks'
import { openIngredientModal } from '../../../services/reducers/ingredients'
import { TBurgerIngredient, TIngredientDetails } from '../../../utils/types'
import { useDrag } from "react-dnd";
import { Link, useLocation } from 'react-router-dom'


const BurgerIngredient = ({ ingredient }: TBurgerIngredient) => {
  const { image, price, name } = ingredient
  const location = useLocation();

  const dispatch = useDispatch()
  const { cart } = useSelector((store: any) => store.ingredients)

  const handleOpenIngredientModal = (ingredient: TIngredientDetails) => {
    dispatch(openIngredientModal(ingredient))
  }

  const [{ opacity }, dragRef] = useDrag({
    type: 'bun',
    item: ingredient,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1,
    })
  });

  let counter = 0
  cart.forEach((ingredient: { name: string; type: string }) => ingredient.name === name && (ingredient.type === 'bun' ? counter += 2 : counter += 1))

  return (
    <li
      onClick={() => handleOpenIngredientModal(ingredient)}
      ref={dragRef}
      style={{ opacity }}
      className={styles.cardItem}
    >
      <Link key={location.key} className={styles.link} to={{ pathname: `/ingredients/${ingredient._id}`, state: { background: location } }}>
        <img
          src={image}
          alt={image}
          className={styles.cardImage} />
        <div className={styles.price}>
          <span>{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={styles.cardTitle}>{name}</p>
        {counter > 0 &&
          <div className={styles.count} >
            <Counter count={counter} size="default" />
          </div>
        }
      </Link>
    </li>
  )
}


export default BurgerIngredient