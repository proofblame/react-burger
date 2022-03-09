import styles from './app.module.css';
import AppHeader from '../app-header/app-header'


import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getIngredients } from '../../services/actions/ingredients';
import { getUser } from '../../services/actions/auth';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import { Main, Login, Register, ForgotPassword, ResetPassword, Profile, IngredientInfo } from '../../pages';
import { ProtectedRoute } from '../protected-route/protected-route';
import { closeIngredientModal } from '../../services/reducers/ingredients';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {

  const dispatch = useDispatch()

  // const location = useLocation();

  // const { ingredientModal } = useSelector(store => store.ingredients)
  // const ingredientModal = location.state && location.state.fromModal;

  const handleCloseModal = () => {
    dispatch(closeIngredientModal())
  }

  useEffect(
    () => {
      dispatch(getUser())
      dispatch(getIngredients())
      // console.log(location)
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
            <Route path='/ingredients/:id'>
              <IngredientInfo />
            </Route>
            <ProtectedRoute path='/profile'>
              <Profile />
            </ProtectedRoute>
            {/* {ingredientModal &&
              <Route path='/ingredients/:id'>
                <Modal onClose={handleCloseModal} header='Детали ингредиента'>
                  <IngredientDetails />
                </Modal>
              </Route>
            } */}
          </Switch>



        </main>
      </section>


    </Router>
  );
}

export default App;
