import { Steps } from 'antd';
import { useEffect, useState } from 'react';
// import { Link,  Redirect } from 'react-router-dom';
// import { Container } from '../../profile/styled';

const { Step } = Steps;


export const ProgressBar = ({f, c, newUser }) => {

  // useEffect(()=>{
  //   console.log(c)
  // },[c])
  
  const [status, setStatus] = useState('wait')
  const [status2, setStatus2] = useState('wait')
  const [status3, setStatus3] = useState('wait')

  useEffect(()=>{
      if(newUser.role === 'donor' || newUser.role === 'receiver'){ 
        setStatus('finish')
      }else if (newUser.role === "" && c > 0){
        setStatus('error')
      } else {
        setStatus('wait')
      }
  }, [newUser])




useEffect(()=>{
  if(newUser.role ==='donor'){
    if(newUser.name !== ''  && newUser.password !== ''  && newUser.email !== ""){ 
      setStatus2('finish' )
    }else if ((newUser.name === '' || newUser.password === '' || newUser.email === '') && c > 1) {
      setStatus2('error')
    } else {
      setStatus2('wait')
    }
  }else {
    if(newUser.name  !== '' && newUser.password !== '' && newUser.email !== '' && newUser.coordinates.length ){ 
      setStatus2('finish' )
    }else if ((newUser.name === ''  || newUser.password === ''  || newUser.email === "" || !Boolean(newUser.coordinates.length)) && c > 1){
      setStatus2('error')
    }else {
      setStatus2('wait')
    }
  }
}, [newUser, c])


return (
  <div>
    <Steps
                type="navigation"
                size="small"
                current={c}
                onChange={f}
                className="site-navigation-steps"
              >
                
                  <Step status={status}  title="Choose Role" />
                  <Step status={status2} title="Role Information" />
                  <Step status={status3} title="Submit your Information" />
              </Steps>
        </div>
  );
};
