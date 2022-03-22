import styles from './ingredient-details.module.css'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { useMemo } from 'react';
import { TIngredientDetails, TIngredientId } from '../../utils/types';
import { FC } from 'react';

const IngredientDetails: FC = () => {
  const { id } = useParams<TIngredientId>()
  const { ingredients } = useSelector((store: any) => store.ingredients)
  const ingredient = useMemo(
    () => {
      return ingredients.find((ingredient: TIngredientDetails) => ingredient._id === id)
    }, [ingredients, id]
  )

  if (!ingredient) return (null)

  return (
    <div className={styles.card}>
      <img src={ingredient.image} alt={ingredient.name} className={styles.image} />
      <p className={styles.cardTitle}>{ingredient.name}</p>
      <ul className={styles.nutritionals}>
        <li className={styles.item}>
          <p className={styles.nutritionalTitle}>Калории,ккал</p>
          <p className={styles.nutritionalValue}>{ingredient.calories}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.nutritionalTitle}>Белки, г</p>
          <p className={styles.nutritionalValue}>{ingredient.proteins}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.nutritionalTitle}>Жиры, г</p>
          <p className={styles.nutritionalValue}>{ingredient.fat}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.nutritionalTitle}>Углеводы, г</p>
          <p className={styles.nutritionalValue}>{ingredient.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

export default IngredientDetails;
