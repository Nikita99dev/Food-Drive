import Main from './Main'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actions} from '../../Redux/slices/rootReducer'
import { Container } from '../profile/styled'
import { Link } from 'react-router-dom'

export default function MainMAp() {

  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(actions.getAllMapssPending())
  },[])

const maps = useSelector(state=>state.Recmap.mainMap)

console.log('main maps', maps)

  return (
    <Container>
      <h1>Those people we already helped </h1>
      <h1><Link to='signup' >Help Them Too </Link></h1>
    <Main points={maps}/>
    </Container>
  )
}
