import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import api from '../../utils/api'
import { useEffect, useState } from 'react'

function App() {
  const [ingredients, setIngredients] = useState([]);

  const getData = async () => {
    try {
      const res = await api.getData()
      setIngredients(res.data)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (

    <section className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={ingredients} />
        <BurgerConstructor data={ingredients} />
      </main>
    </section>

  );
}

export default App;
