import { useAuth } from '../services/auth';
import { Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ProtectedRoute({ children, ...rest }) {
  let { getUser, ...auth } = useAuth();
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = async () => {
    await getUser();
    setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, []);

  if (!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      // Получим текущий маршрут, с которого произойдёт переадресация 
      // для неавторизованного пользователя
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            // Передадим в пропс to не строку, а объект.
            to={{
              // Маршрут, на который произойдёт переадресация
              pathname: '/login',
              // В from сохраним текущий маршрут
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}