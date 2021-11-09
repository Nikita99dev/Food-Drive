import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container } from '../../profile/styled';
import logo from '../../../images/donors-thumb-s.png'
import logoHelp from '../../../images/volunteer-thumb-s.png'



export default function FirstStep({f,c, setNewUser}) {

  const onClick = (e) => {
    setNewUser(prev=>({...prev, role: e.target.value}))
    f(1)
    // h.replace('/custom/1/'
  }

  return (
    <div style={{'margin':'5px'}}>
      <h1>Choose your Role</h1>
    <Container style={{'display': 'flex', 'flex-direction': 'row', 'justify-content':"space-around" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={logo}
            alt="donor"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Donor
            </Typography>
            <Typography variant="body2" color="text.secondary">
              IF you want to hepl people
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" variant="contained" onClick={onClick} value='donor' color="primary">
            Donate
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={logoHelp}
          alt="reciever"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Reciever
          </Typography>
          <Typography variant="body2" color="text.secondary">
            if you need help click here {c}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" variant="contained" onClick={onClick} value='receiver' color="primary">
          Recive
        </Button>
      </CardActions>
    </Card>
    </Container>
    </div>
    );
}
