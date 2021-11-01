import { Steps } from 'antd';
import { useEffect, useState } from 'react';
import { Link,  Redirect } from 'react-router-dom';
// import { Container } from '../../profile/styled';

const { Step } = Steps;


export const ProgressBar = ({f, c, newUser }) => {

  useEffect(()=>{
    console.log(c)
  },[c])
  
  const [status, setStatus] = useState()

  useEffect(()=>{
      if(newUser.role === 'donor' || newUser.role === 'reciver'){ 
        setStatus('finish')
      }else{
        setStatus('wait')
      }
  }, [newUser.role])


let status2;
useEffect(()=>{
  if(newUser.role ==='donor'){
    if(newUser.name !== ''  && newUser.password !== ''  && newUser.email !== ''  && newUser.money ){ 
      status2 = 'finish' 
    }else{
      status2 = 'wait'
    }
  }else {
    if(newUser.name  !== '' && newUser.password !== '' && newUser.email !== '' && newUser.coordinates.length ){ 
      status2 = 'finish' 
    }else{
      status2 = 'wait'
    }
  }

}, [newUser])


return (
  <div>
    <Steps
                type="navigation"
                size="small"
                current={c}
                onChange={f}
                className="site-navigation-steps"
              >
                
                  <Step status={status}  title="Role" />
                  <Step status={status2} title="Info" />
                  <Step status="wait" title="Submit" disabled />
              </Steps>
        </div>
  );
};
