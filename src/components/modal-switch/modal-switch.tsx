
import { FC } from 'react'
import { useLocation, Switch, Route, useHistory } from 'react-router-dom'
import { ForgotPassword, IngredientInfo, Login, Main, ProfilePage, Register, ResetPassword } from '../../pages'
import { TLocation } from '../../utils/types'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import { ProtectedRoute } from '../protected-route/protected-route'
import OrderInfo from '../order-info/order-info'
import FeedPage from '../../pages/feed/feed'

const ModalSwitch: FC = () => {
  const location = useLocation<TLocation>()
  const history = useHistory()
  const background = location.state && location.state.background

  const handleCloseModal = () => {
    history.goBack()
  }

  return (
    <>
      <Switch location={background || location}>
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
        <Route path='/orders'>
          <FeedPage />
        </Route>
        <ProtectedRoute path='/profile'>
          <ProfilePage />
        </ProtectedRoute>
      </Switch>
      {
        background &&
        <Route path='/ingredients/:id'>
          <Modal onClose={handleCloseModal} header="Детали ингредиента">
            <IngredientDetails />
          </Modal>
        </Route>
      }
      {
        background &&
        <Route path='/profile/orders/:id'>
          <Modal onClose={handleCloseModal} header="Детали ингредиента">
            <OrderInfo />
          </Modal>
        </Route>
      }
    </>
  )
}

export default ModalSwitch