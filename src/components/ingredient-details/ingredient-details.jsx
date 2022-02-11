import styles from './ingredient-details.module.css'
import { useSelector } from 'react-redux';

const IngredientDetails = () => {

  const { ingredient } = useSelector(store => store.ingredients)

  return (
    (ingredient &&
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
    )
  );
};

export default IngredientDetails;
