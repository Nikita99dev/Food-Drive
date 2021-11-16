import Main from "./Main";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../Redux/slices/rootReducer";
import { Container } from "../profile/styled";
import { Link } from "react-router-dom";
import { StyledDiv } from "./styledDiv";
import Paper from "@mui/material/Paper";
import logo from "../../images/istockphoto-1223169200-612x612.jpg";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));


export default function MainMAp() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAllMapssPending());
    dispatch(actions.getAllMapsPending());
  }, [dispatch]);

  const maps = useSelector((state) => state.Recmap.mainMap);
  const maps2 = useSelector((state) => state.admin.data);

  console.log("main maps", maps2);

  return (
    <Container style={{ marginTop: 40 }}>
      <h1 style={{color: '#6A5ACD'}}>We Already Helped Those People </h1>
      <Paper
        elevation={24}
        style={{ maxWidth: 1000, borderRadius:20, display: "flex", justifyContent: "center" , backgroundColor: "#F5F5F5", minWidth: 800, minHeight: 600}}
      >
        <Container
          style={{ backgroundColor: "white", borderRadius: 20, margin: "auto",  padding: 20 , minWidth: 600}}
          >
          <Button variant="contained" size="small">
            <Link to="signup">
              <h6>Help Them Too </h6>
              <br/>
            </Link>
            </Button>
          <StyledDiv>
            <img src={logo} style={{ maxWidth: 250, maxHeight: 250 }} />
            <StyledDiv>
              <Main points={maps} />
            </StyledDiv>
            <br />
          </StyledDiv>
        </Container>
      </Paper>
    </Container>
  );
}
