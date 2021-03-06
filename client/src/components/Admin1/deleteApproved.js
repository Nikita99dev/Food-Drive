import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slices/rootReducer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Main from "../Main/Main";
import { Empty } from 'antd';
import { Container } from "../profile/styled";


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
  minWidth: 450
};

export default function DelApproved({columns,admin}) {
  
 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [id, setId] = useState()
  
  const dispatch = useDispatch()

  const smartView = (e) => {
    setId(prev=>prev = e.target.parentElement.id)
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const onClick = () => {
    dispatch(actions.deleteMapPending({id, isApproved: true}))
  }

return (
<>
    <Container>
  <Paper sx={{ width: '95%', overflow: 'hidden', margin: 3, maxWidth: 1000 }}>
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
          {
          admin.dataApproved
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <>
                <TableRow hover key={row.id} onClick={function(e){smartView(e); handleOpen()}} role="checkbox" tabIndex={-1} id={row.id} key={row.code}>
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
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={admin.dataApproved.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      {admin.dataApproved.length && id?admin.dataApproved.map(el=>{
        if(el.id === +id) {
          return `Name: ${el.name}`
        }else {
          return null
        }})
        :''}
    </Typography>
    <Typography id="modal-modal-discription" sx={{ mt: 2, ml: 5 }}>
      {admin.dataApproved.length && id?admin.dataApproved.map(el=>{
        if(el.id === +id) {
          return `Lives: ${el.address}`
        }else {
          return null
        }})
        :''}
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2, ml: 5 }}>
    {admin.dataApproved.length && id?admin.dataApproved.map(el=>{
        if(el.id === +id) {
          return  <Main points={[+el.longitude, +el.latitude]}/>
        }else {
          return null
        }})
        :''}
    </Typography>
    <span className='d-flex flex-row justify-content-around mt-5' >
    {/* <button  type="button" onClick={()=> {approve(); handleClose();}} className="btn btn-primary">Approve</button> */}
    <button  type="button" onClick={()=> {onClick(); handleClose();}} className="btn btn-danger">Delete</button>
    </span>
  </Box>
</Modal>
</Container> 
  </>
);
}
