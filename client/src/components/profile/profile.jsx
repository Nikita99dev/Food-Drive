import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Redux/slices/rootReducer';


export default function Profile () {
  
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch();

  const recMap = useSelector(state=>state.Recmap)


  useEffect(()=>{
    if(user?.user?.userId){
      dispatch(actions.getMapPending(user.user.userId))
    }
  }, [user])


  
  return (
    <Descriptions title="User Info">
    <Descriptions.Item label="UserName">{user?.user?.username}</Descriptions.Item>
    <Descriptions.Item label="Telephone">{}</Descriptions.Item>
    <Descriptions.Item label="Live">{recMap.map.address}</Descriptions.Item>
    <Descriptions.Item label="Status">{recMap.map.isApproved?"Approved":"Under review"}</Descriptions.Item>
    <Descriptions.Item label="Coordinates">
    {[recMap.map.latitude, ' : ',recMap.map.longitude] }
    </Descriptions.Item>
  </Descriptions>
  )
}



