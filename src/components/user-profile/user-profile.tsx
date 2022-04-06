import style from './user-profile.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { updateUser } from '../../services/actions/auth'
import { useDispatch, useSelector } from '../../services/hooks';
import ModalOverlay from '../modal/modal-overlay/modal-overlay';
import { CircularProgress } from '@mui/material';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

const UserProfile = () => {
  const dispatch = useDispatch()
  const { userData, loader } = useSelector(store => store.auth)
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [buttonsState, setButtonsState] = useState(false)


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setButtonsState(true)
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      dispatch(updateUser(data))
    } catch (error) {
      console.error(error)
    } finally {
      setButtonsState(false)
    }
  }
  const onReset = () => {
    if (userData) {
      const { name, email } = userData
      setData({
        name,
        email,
        password: '',
      })
    }
    setButtonsState(false)
  }

  useEffect(
    () => {
      if (userData) {
        const { name, email } = userData
        setData({
          name,
          email,
          password: '',
        })
      }
    }, [userData]
  )

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.input}>
          <Input
            type='text'
            placeholder='Имя'
            onChange={handleChange}
            value={data.name}
            name='name'
            error={false}
            errorText='Ошибка'
            size='default'
            icon={'EditIcon'}
          />
        </div>
        <div className={style.input}>
          <Input
            type='email'
            placeholder='E-mail'
            onChange={handleChange}
            value={data.email}
            name='email'
            error={false}
            errorText='Ошибка'
            size='default'
            icon={'EditIcon'}
          />
        </div>
        <div className={style.input}>
          <Input
            type='password'
            placeholder='Пароль'
            onChange={handleChange}
            value={data.password}
            name='password'
            error={false}
            errorText='Ошибка'
            size='default'
            icon={'EditIcon'}
          />
        </div>
        {buttonsState &&
          <div className={style.buttons}>
            <div className={style.button}>
              <Button type="primary" size="medium" onClick={onReset}>
                Отмена
              </Button>
            </div>
            <div className={style.button}>
              <Button type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          </div>
        }
      </form>
      {
        loader &&
        <ModalOverlay>
          <CircularProgress className={style.loader} size="100px" />
        </ModalOverlay>
      }
    </>
  )
}

export default UserProfile