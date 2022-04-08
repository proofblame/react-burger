import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/hooks';


export const ProtectedRoute = ({ children, ...rest }: RouteProps) => {
  const location = useLocation()
  const { userData } = useSelector(store => store.auth)


  return (
    <Route
      {...rest}
      // @ts-ignore
      render={
        () => userData ? (children) : <Redirect to={{
          pathname: `/login`,
          state: { from: location },
        }} />
      }
    />
  );



}