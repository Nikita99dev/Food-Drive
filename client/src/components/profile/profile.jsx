import 'antd/dist/antd.css';
import { Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Redux/slices/rootReducer';
import CircularColor from '../Loader/Loader';
import Main from '../Main/Main';
import { Container } from './styled';
import { success } from '../common/succesSmall';
import DonotInput from './donorInput';
import { Modal, Button } from 'antd';


export default function Profile () {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const user = useSelector(state=>state.user)
  const dispatch = useDispatch();

  const recMap = useSelector(state=>state.Recmap)


  useEffect(()=>{
    if(user?.user?.role === 'receiver'){
      dispatch(actions.getMapPending(user.user.userId))
    }
  }, [user])


  
  useEffect(()=>{
    if(recMap.loader === true && recMap.map.latitude) success({info: "Done Seccusfully"})
  },[recMap.loader])

  return (
    <>
    {user.user.role === 'receiver'?
    !recMap.error?
    <Container>
    <Descriptions title="User Information">
    <Descriptions.Item label="UserName">{user?.user?.username}</Descriptions.Item>
    <Descriptions.Item label="Live">{recMap.map.address}</Descriptions.Item>
    <Descriptions.Item label="Status">{recMap.map.isApproved?"Approved":"Under review"}</Descriptions.Item>
    <Descriptions.Item label="Coordinates">
    {[recMap.map.latitude, ' : ',recMap.map.longitude]}
    </Descriptions.Item>
  </Descriptions>
  <Container >
    {recMap.loader ?<CircularColor/>: recMap.map.longitude?<Main points={[+recMap.map.longitude, +recMap.map.latitude]}/>:""}
    </Container>
    </Container>
    :<Container>
      <Descriptions title="User Information">
        <Descriptions.Item label="UserName">{user?.user?.username}</Descriptions.Item>
        <Descriptions.Item label="Discription">Your Records have been deleted try submit it again</Descriptions.Item>
        </Descriptions>
    </Container>
    :<Container>
    <Descriptions title="User Information">
    <Descriptions.Item label="UserName">{user?.user?.username}</Descriptions.Item>
    <Descriptions.Item label="Role">{user?.user?.role}</Descriptions.Item>
    <Descriptions.Item label="Money Donated">
      {user?.user?.money}
    </Descriptions.Item>
  </Descriptions>
  <Button type="primary" onClick={showModal}>
        Donate!
      </Button>
      <Modal title="Submit your Amount" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <DonotInput onOk={handleOk} />
      </Modal>
    </Container>
  }
  </>
  )
}



