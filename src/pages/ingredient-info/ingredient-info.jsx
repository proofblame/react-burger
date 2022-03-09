import IngredientDetails from '../../components/ingredient-details/ingredient-details'
import style from './ingredient-info.module.css'
import { useHistory } from 'react-router-dom';
import Modal from '../../components/modal/modal';
import { Main } from '../main/main';

export const IngredientInfo = () => {

  const history = useHistory();
  let render;

  const handleCloseModal = () => {
    history.goBack()
  }

  if (history.location?.state?.modal) {
    render = (
      <>
        <Main />
        <Modal onClose={handleCloseModal} header='Детали ингредиента'>
          <IngredientDetails />
        </Modal>
      </>
    )
  } else {
    render = (
      <>
        <section className={style.ingredient}>
          <h3 className={style.title}>Детали ингредиента</h3>
          <IngredientDetails />
        </section>
      </>
    )
  }
  return (
    <>
      {render}
    </>
  )
}
