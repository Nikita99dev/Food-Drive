import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { actions } from "../../../Redux/slices/rootReducer"
import { Container } from "../../profile/styled";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Final({newUser, user}){

  const dispatch = useDispatch()

  const history = useHistory()
  
  useEffect(()=>{
    user = '';
  },[])
  // const user1 = useSelector(state=>state.user)

  // useEffect(()=>{
  //   console.log('qqqqqqqqqqqqqqqqqqqqqq', user1)
  //   if(user1?.user?.id ){
  //     dispatch(actions.recordMapPending({newUser,user, history}))
  //   } 
  //   },[user1])
    
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(actions.registerUserPending({newUser, history}))
    }

    useEffect(()=>{
      if(user?.user?.id && newUser.role === "receiver" ){
        dispatch(actions.recordMapPending({newUser, user, history}))
      } 
    },[user])
      
  return (
    <Container>
      <h2>Make sure everything is correct</h2>
    {newUser.role === 'donor'?
    <Container>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Name: {newUser.name}
        </Typography>
        <Typography variant="h5" component="div">
        Email: {newUser.email}
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Address: {newUser.address}
        </Typography> */}
        <Typography variant="body2">
        Money: {newUser.money}
          <br />
          Role: {newUser.role}
        </Typography>
      </CardContent>
      <CardActions>
       <button className="btn btn-primary" onClick={submitHandler} >Submit</button>
      </CardActions>
    </Card>
    </Container>
    :<Container>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Name: {newUser.name}
        </Typography>
        <Typography variant="h5" component="div">
      Email: {newUser.email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Address: {newUser.address}
        </Typography>
        <Typography variant="body2">
       Money: {newUser.money}
          <br />
        Role: {newUser.role}
        </Typography>
      </CardContent>
      <CardActions>
       <button className="btn btn-primary"  onClick={submitHandler} >Submit</button>
      </CardActions>
    </Card>
    </Container>
    }
    </Container>
    
  )
}

