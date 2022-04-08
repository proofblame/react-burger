import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from '../../services/hooks';


export const ProtectedRoute = ({ children, ...rest }: RouteProps) => {

  const { userData } = useSelector(store => store.auth)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}