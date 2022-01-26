import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import ConstructorPage from '../constructor-page/constructor-page'

function App() {
  return (
    <section className={styles.app}>
      <AppHeader />
      <ConstructorPage />
    </section>
  );
}

export default App;
