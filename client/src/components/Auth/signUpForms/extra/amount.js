import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
// import { useState } from 'react';


export default function RowRadioButtonsGroup() {

  // const [other, setOther] = useState()

  // const isChecked = (e) => {
  //   setOther(prev=>prev=e.target.value)
  // }

  return (
    <div style={{'margin': '10px'}}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Choose amout of the donation</FormLabel>
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
        <FormControlLabel value="500" other control={<Radio />} label="500" />
        <FormControlLabel value="1000" control={<Radio />} label="1000" />
        <FormControlLabel value="2000" control={<Radio />} label="2000" />
        <FormControlLabel
          value="other"
          other
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
    </div>
  );
}
