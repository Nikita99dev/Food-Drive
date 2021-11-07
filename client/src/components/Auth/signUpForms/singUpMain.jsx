import {  useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// import { useDispatch } from "react-redux";
// import { actions } from "../../../Redux/slices/rootReducer";
import Final from "./finalStep";
import FirstStep from "./firstStep";
// import { Func } from "./new";
import { ProgressBar } from "./progress";
// import SignUp from "./SignUpForm";
import SignUpTest from "./SignUpForm copy";



export default function MainSignUp() {
  const initstate = {
    name: '',
    password: '',
    email: '',
    role: '',
    money:'',
    address: '',
    coordinates: [],
    }

  
  const [newUser, setNewUser] = useState(initstate)
  

  const history = useHistory() 


  const user = useSelector(state=>state.user)

  const [state, setState] = useState(0)
 
  
  const Change = (e) => {
    setState(prev=>prev = e)
  }

return (
  <div style={{'margin': '5px'}} >
  <ProgressBar f={Change} c={state} newUser={newUser}/> 
  {state === 0 && <FirstStep f={setState} setNewUser={setNewUser} c={state}/>}
  {state === 1 && <SignUpTest f={Change} setNewUser={setNewUser} newUser={newUser} user={user} />}
  {state === 2 && <Final f={Change} setNewUser={setNewUser} history={history} newUser={newUser} user={user}/>}
  </div>
);
}
