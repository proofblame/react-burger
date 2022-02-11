import styles from './constructor-list.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingredientDetails, ingredientsPropTypes } from '../../../utils/types';
import ConstructorIngredient from '../constructor-ingredient/constructor-ingredient';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import { useMemo } from 'react';
import DndField from '../../dnd-field/dnd-field';
import { addIngredient } from '../../../services/reducers/ingredients';
import StuffList from '../stuff-list/stuff-list';


const ConstructorList = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector(store => store.ingredients)

  const bun = useMemo(() => {
    return cart.find(bun => bun.type === 'bun')
  }, [cart])

  const stuff = useMemo(() => {
    return cart.filter(stuff => stuff.type !== 'bun')
  }, [cart])




  const [{ isHover }, dropTarget] = useDrop({
    accept: 'bun',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(ingredient) {
      // console.log(drop())
      dispatch(addIngredient(ingredient))
      // currentFrame === 'bun' ? 'stuff' : 'bun'
    },
  });






  // const ingredientItem = stuff.map((ingredient, index) => (
  //   <ConstructorIngredient ingredient={ingredient} key={index} />
  // ))

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
      {stuff.length > 0 ?
        <>
          <StuffList target={dropTarget} onHover={isHover} stuff={stuff} />

          {/* <ul className={styles.burgerBody} ref={dropTarget}>
            {ingredientItem}
          </ul> */}
        </>
        :
        <DndField target={dropTarget} text='Выберите начинки' onHover={isHover} />
      }
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