import styles from './constructor-list.module.css'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
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


  const addItem = (ingredient) => {
    dispatch(addIngredient(ingredient))
  }

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'bun',
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(ingredient) {
      addItem(ingredient)
    },
  });

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
        <StuffList target={dropTarget} onHover={isHover} />
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

export default ConstructorList