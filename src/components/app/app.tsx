import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import { useEffect, FC } from 'react'
import { useDispatch } from '../../services/hooks';
import { getIngredients } from '../../services/actions/ingredients';
import { getUser } from '../../services/actions/auth';
import { BrowserRouter as Router } from 'react-router-dom'
import ModalSwitch from '../modal-switch/modal-switch'

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getUser())
      dispatch(getIngredients())
    },
    [dispatch]
  )

  return (
    <Router>
      <section className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          <ModalSwitch />
        </main>
      </section>
    </Router>
  );
}

export default App;
