import styles from './constructor-list.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientDetails, ingredientsPropTypes } from '../../../utils/types';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';
import { useSelector } from 'react-redux';
import { useDrop } from "react-dnd";
import { useMemo } from 'react';

const ConstructorList = () => {

  const { cart } = useSelector(store => store.ingredients)

  const bun = useMemo(() => {
    return cart.find(bun => bun.type === 'bun')
  }, [cart])

  const stuff = useMemo(() => {
    return cart.filter(stuff => stuff.type !== 'bun')
  }, [cart])



  const [, dropTarget] = useDrop({
    accept: "animal",
    drop(itemId) {
      // onDropHandler(itemId);
    },
  });


  const ingredientItem = stuff.map((ingredient, index) => (
    <ConstructorIngredient ingredient={ingredient} key={index} />
  ))

  // const content = cart.length > 0 ?  : <DndField />

  return (


    <div className={styles.constructorWrapper}>
      {bun &&
        <div className={styles.burgerElement}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      }

      <ul className={styles.burgerBody}>
        {ingredientItem}
      </ul>

      {bun &&
        <div className={styles.burgerElement}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      }
    </div>


  )

}

ConstructorList.propTypes = {
  // bun: ingredientDetails.isRequired,
  // stuff: ingredientsPropTypes.isRequired,
};

export default ConstructorList