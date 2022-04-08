import styles from './constructor-ingredient.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux';
import { deleteIngredient } from '../../../services/reducers/ingredients'
import { useDrag, useDrop, DropTargetMonitor, DragObjectFactory } from "react-dnd";
import { useRef } from 'react';
import { TConstructorIngredient, TIngredientDetails } from '../../../utils/types';


const ConstructorIngredient = ({ ingredient, index, onMove }: TConstructorIngredient) => {
  const ref = useRef<HTMLLIElement>(null)

  const { name, price, image, uid } = ingredient

  const dispatch = useDispatch();

  const handleDeleteIngredient = (id: string) => {
    dispatch(deleteIngredient(id))
  }

  const [{ isDragging }, drag] = useDrag({
    type: 'stuff',
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const opacity = isDragging ? 0 : 1

  const [, drop] = useDrop({
    accept: 'stuff',

    hover: (item: DragObjectFactory<TIngredientDetails> & { index: number }, monitor: DropTargetMonitor) => {
      if (!ref.current) return
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset: any = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref))

  return (
    ingredient &&
    <li className={styles.burgerElement}
      ref={ref}
      style={{ opacity }}
    >
      <div className={styles.dragIcon}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image}
        handleClose={() => handleDeleteIngredient(uid as string)}
      />
    </li>
  )
}

export default ConstructorIngredient