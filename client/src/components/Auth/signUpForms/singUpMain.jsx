import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import { Container } from "../../profile/styled";
import Final from "./finalStep";
import FirstStep from "./firstStep";
import { Func } from "./new";
import { ProgressBar } from "./progress";
import SignUp from "./SignUpForm";
import SignUpTest from "./SignUpForm copy";


export default function MainSignUp({user}) {
  const initstate = {
    name: '',
    password: '',
    email: '',
    role: '',
    money:'',
    address: '',
    coordinates: [],
    }

    useEffect(()=>{
      user = '';
    },[])
  
  const [newUser, setNewUser] = useState(initstate)
  
  const history = useHistory()


  const [state, setState] = useState(0)

  
  const Change = (e) => {
    setState(prev=>prev = e)
    // console.log(state)
    // history.replace(`/custom/${e}`)
  }

  // useEffect(()=>{
  //   console.log(state)
  //   history.push(`/custom/${state}`)
  // },[state])
  
return (
  <div style={{'margin': '5px'}} >
  <ProgressBar f={Change} c={state} newUser={newUser}/> 
  {state === 0 && <FirstStep f={setState} setNewUser={setNewUser} c={state} h={history} />}
  {state === 1 && <SignUpTest f={Change} setNewUser={setNewUser} newUser={newUser} user={user} />}
  {state === 2 && <Final f={Change} setNewUser={setNewUser} newUser={newUser} user={user}/>}
  </div>
);
}
