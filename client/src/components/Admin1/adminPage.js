import { useState} from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slices/rootReducer";
import CircularColor from "../Loader/Loader";
import { Empty } from 'antd';
import { Container } from "../profile/styled";
import DelApproved from "./deleteApproved";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ApproveMap from "./adminApprove";

const columns = [
  { id: 'id', label: 'ID', minWidth: 170,format: (value) => value.toLocaleString('en-US')  },
  { id: 'name', label: 'Name', minWidth: 100 },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'latitude',
    label: 'Latitude',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'longitude',
    label: 'Longitude',
    minWidth: 170,
    align: 'right',
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 90,
  p: 4,
};



export default function AdminCab() {

  const [alignment, setAlignment] = useState('Pending');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    dispatch(actions.getAllMapsPending())
  }, [])
  
  const dispatch = useDispatch()

  const admin = useSelector(state=>state.admin)

  return (
    <>
    <Container>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      
    >
      <ToggleButton value="Pending">Pending</ToggleButton>
      <ToggleButton value="Accepted">Accepted</ToggleButton>
      <ToggleButton value="Pending Map">Pending Map</ToggleButton>
    </ToggleButtonGroup>
    </Container>
    {admin?.loader? 
      <Container>
      <CircularColor/>
      </Container>
    : 
    admin.data.length && alignment === 'Pending'?
      <ApproveMap admin={admin} columns={columns} />
    : 
    admin.dataApproved.length && alignment === 'Accepted' ?
        <DelApproved admin={admin} columns={columns} />
    :
        <Container><Empty/> </Container>  
    }
    </>
  );
}
