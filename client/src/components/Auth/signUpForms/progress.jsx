import { Steps } from 'antd';
import { useEffect } from 'react';
import { Link,  Redirect } from 'react-router-dom';
// import { Container } from '../../profile/styled';

const { Step } = Steps;


export const ProgressBar = ({f, c, newUser}) => {

  useEffect(()=>{
    console.log(c)
  },[c])
  
  let status;
  useEffect(()=>{
      if(newUser.role !== ''){ 
        status = 'finish'
      }else{
        status = 'wait'
      }
    console.log('status', status)
  }, [newUser])

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
                  <Step status={status2}title="Info" />
                  <Step status="finish" title="Submit" disabled />
              </Steps>
        </div>
  );
};
