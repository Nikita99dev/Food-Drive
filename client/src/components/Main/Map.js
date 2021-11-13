import Main from './Main'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {actions} from '../../Redux/slices/rootReducer'
import { Container } from '../profile/styled'
import { Link } from 'react-router-dom'
import { StyledDiv } from './styledDiv'

export default function MainMAp() {

  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(actions.getAllMapssPending())
    dispatch(actions.getAllMapsPending())
  },[dispatch])


const maps = useSelector(state=>state.Recmap.mainMap)
const maps2 = useSelector(state=>state.admin.data)

console.log('main maps', maps2)

  return (
    <Container>
      <h1>Those people we already helped </h1>
      <h1><Link to='signup' >Help Them Too </Link></h1>
    <StyledDiv>
  
  <StyledDiv>
    <Main points={maps}/>
  </StyledDiv>
    <br/>
    <StyledDiv>
    <Main points={maps2}/>
    </StyledDiv>
    </StyledDiv>
    
    </Container>
  )
}
