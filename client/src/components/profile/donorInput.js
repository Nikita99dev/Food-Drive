import { Input, Button } from "antd";
import { Radio } from 'antd';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slices/rootReducer";


export default function DonotInput({onOk}) {

  const {userId} = useSelector(state=> state.user.user)

  const dispatch = useDispatch()

  const [state, setState ] = useState(0);


const OnClick = (e) => {
  setState(prev=>prev=e.target.value)
}

const OnChange = (e) => {
    setState(prev=>prev = e.target.value.split().filter(el=>+el))
}


  return (
  <>
  <div style={{display: 'flex', 'flex-direction': 'column', 'justify-content': 'center'}}>
  <h1>You can donate more</h1>
  <h2>Amount: {state} Rubbles</h2>
  <div style={{maxWidth: '500px'}}>
    <Radio.Group defaultValue={state} buttonStyle="solid">
      <Radio.Button onClick={OnClick} value="500">500 Rubbles</Radio.Button>
      <Radio.Button onClick={OnClick} value="1000" >1000 Rubbles</Radio.Button>
      <Radio.Button onClick={OnClick} value="2000" >2000 Rubbles</Radio.Button>
      <Radio.Button onClick={OnClick} value="5000" >5000 Rubbles</Radio.Button>
    </Radio.Group>
    <br />
    <br />
    <Input prefix="₽" onChange={OnChange} value={state} suffix="RUB" />
    <div style={{"margin": "5px", "display": "flex", "justify-content":"center" }}>
    <Button type="primary" onClick={()=>{dispatch(actions.updateDonationPending({state, userId}));onOk() }} >Donate</Button>
    </div>
    </div>
    </div>
  </>
  )
}
