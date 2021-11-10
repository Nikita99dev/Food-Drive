import { useState} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slices/rootReducer";
import CircularColor from "../Loader/Loader";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Main from "../Main/Main";
import EditIcon from '@mui/icons-material/Edit';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

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

const action = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

function createData(name, code, population, size) {
  return { name, code, population, size };
}



export default function AdminCab() {

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  useEffect(() => {
    dispatch(actions.getAllMapsPending())
  }, [])
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [id, setId] = useState()
  
  const dispatch = useDispatch()

const smartView = (e) => {
 setId(prev=> prev = e.target.parentElement.id)
}

  const admin = useSelector(state=>state.admin)


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const onClick = () => {
    dispatch(actions.deleteMapPending({id}))
  }

  const approve = () => {
    dispatch(actions.updateMapPending({id:id}))
  }
  return (
    <>
    {
      admin.loader? 
        <CircularColor/>
      :
      <>
    <Paper sx={{ width: '95%', overflow: 'hidden' }} className='m-5'>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {admin.data.length? 
            admin.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <>
                  <TableRow hover onClick={function(e){smartView(e); handleOpen()}} role="checkbox" tabIndex={-1} id={row.id} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                        </>
                      );
                    })}
                  </TableRow>
                  {/* <Button onClick={handleOpen}>Open modal</Button> */}
                  </>
                );
              }):null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={admin.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 20 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {action.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {admin.data.length && id?admin.data.map(el=>{
          if(el.id === +id) {
            return el.name
          }else {
            return null
          }})
          :''}
      </Typography>
      <Typography id="modal-modal-discription" sx={{ mt: 2 }}>
        {admin.data.length && id?admin.data.map(el=>{
          if(el.id === +id) {
            return 'Lives:' + " " +  el.address
          }else {
            return null
          }})
          :''}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {admin.data.length && id?admin.data.map(el=>{
          if(el.id === +id) {
            return  <Main points={[el.longitude, el.latitude]}/>
          }else {
            return null
          }})
          :''}
      </Typography>
      <span className='d-flex flex-row justify-content-around mt-5' >
      <button  type="button" onClick={()=> {approve(); handleClose();}} className="btn btn-primary">Approve</button>
      <button  type="button" onClick={()=> {onClick(); handleClose();}} className="btn btn-danger">Discard</button>
      </span>
    </Box>
  </Modal>
</>
}
    </>
  );
}
