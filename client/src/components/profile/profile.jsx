import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Redux/slices/rootReducer';
import CircularColor from '../Loader/Loader';
import Main from '../Main/Main';
import { Container } from './styled';
import { success } from '../common/succesSmall';


export default function Profile () {
  
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch();

  const recMap = useSelector(state=>state.Recmap)


  useEffect(()=>{
    if(user?.user?.userId){
      dispatch(actions.getMapPending(user.user.userId))
    }
  }, [user])


  
  useEffect(()=>{
    if(recMap.loader === true && recMap.map.latitude) success({info: "Done Seccusfully"})
  },[recMap.loader])

  return (
    <>
    <Descriptions title="User Information">
    <Descriptions.Item label="UserName">{user?.user?.username}</Descriptions.Item>
    <Descriptions.Item label="Live">{recMap.map.address}</Descriptions.Item>
    <Descriptions.Item label="Status">{recMap.map.isApproved?"Approved":"Under review"}</Descriptions.Item>
    <Descriptions.Item label="Coordinates">
    {[recMap.map.latitude, ' : ',recMap.map.longitude] }
    </Descriptions.Item>
  </Descriptions>
  <Container >
    {recMap.loader ?<CircularColor/>: recMap.map.longitude?<Main points={[+recMap.map.longitude, +recMap.map.latitude]}/>:""}
    </Container>
  </>
  )
}



