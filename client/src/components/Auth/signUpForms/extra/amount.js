import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
// import { useState } from 'react';


export default function RowRadioButtonsGroup({newUser, setNewUser}) {

  
  function onChange(e) {
    setNewUser(prev=>({...prev, money: e.target.value }))
  }

  return (
    <div style={{'margin': '10px'}}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose amout of the donation</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="500" onChange={onChange} checked={newUser.money === '500'}  control={<Radio />} label="500" />
        <FormControlLabel value="1000" onChange={onChange} checked={newUser.money === '1000'}  control={<Radio />} label="1000" />
        <FormControlLabel value="2000" onChange={onChange} checked={newUser.money === '2000'}  control={<Radio />} label="2000" />
        <FormControlLabel value="5000" onChange={onChange} checked={newUser.money === '5000'} control={<Radio />} label="5000" />
      </RadioGroup>
    </FormControl>
    </div>
  );
}
