import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute(props){
  const { children, condition, fallback, ...rest } = props

   return (
   <Route {...rest}>
     {condition?children:<Redirect to={fallback}/>}
   </Route>
   )
}




