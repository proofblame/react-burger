import styles from './app.module.css';
import AppHeader from '../app-header/app-header'


import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { getIngredients } from '../../services/actions/ingredients';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Main, Login, Register, ForgotPassword, ResetPassword, Profile } from '../../pages';

function App() {
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getIngredients())
    },
    [dispatch]
  )

  return (
    <Router>
      <section className={styles.app}>
        <AppHeader />
        <main className={styles.main}>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/forgot-password'>
              <ForgotPassword />
            </Route>
            <Route path='/reset-password'>
              <ResetPassword />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </main>
      </section>
    </Router>
  );
}

export default App;
