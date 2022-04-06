
import { FC } from 'react'
import { useLocation, Switch, Route, useHistory } from 'react-router-dom'
import { ForgotPassword, IngredientInfo, Login, Main, Profile, Register, ResetPassword } from '../../pages'
import { TLocation } from '../../utils/types'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import { ProtectedRoute } from '../protected-route/protected-route'
import FeedItem from '../feed-list/feed-item/feed-item'

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
          <FeedItem />
        </Route>
        <ProtectedRoute path='/profile'>
          <Profile />
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
    </>
  )
}

export default ModalSwitch