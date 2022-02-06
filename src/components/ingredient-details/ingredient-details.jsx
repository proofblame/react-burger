import styles from './ingredient-details.module.css'
import { ingredientDetails } from '../../utils/types'

const IngredientDetails = ({ selectedCard }) => {
  return (
    (selectedCard &&
      <div className={styles.card}>
        <img src={selectedCard.image} alt={selectedCard.name} className={styles.image} />
        <p className={styles.cardTitle}>{selectedCard.name}</p>
        <ul className={styles.nutritionals}>
          <li className={styles.item}>
            <p className={styles.nutritionalTitle}>Калории,ккал</p>
            <p className={styles.nutritionalValue}>{selectedCard.calories}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.nutritionalTitle}>Белки, г</p>
            <p className={styles.nutritionalValue}>{selectedCard.proteins}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.nutritionalTitle}>Жиры, г</p>
            <p className={styles.nutritionalValue}>{selectedCard.fat}</p>
          </li>
          <li className={styles.item}>
            <p className={styles.nutritionalTitle}>Углеводы, г</p>
            <p className={styles.nutritionalValue}>{selectedCard.carbohydrates}</p>
          </li>
        </ul>
      </div>
    )
  );
};

IngredientDetails.propTypes = {
  selectedCard: ingredientDetails.isRequired
}

export default IngredientDetails;
