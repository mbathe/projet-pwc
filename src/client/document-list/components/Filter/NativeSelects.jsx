import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft:5,
    width: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: props.values[1],
  });

  const data=[...props.values];
  const handleChange = (event) => {
    setState({
      type: event.target.value,
    });
    const valeur =data[event.target.value];
    props.typeChange(valeur)
   
  };

  return (
    <div >
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required"  fullWidth={true}>{props.label}</InputLabel>
        <Select
           labelId="demo-simple-select-helper-label"
           id="demo-simple-select-helper"
          value={state.type}
          fullWidth={true}
          onChange={handleChange}
          name="type"
          inputProps={{ 'aria-label': 'type' }}
        >
        
        {props.values.map((value,index) => (
          <MenuItem value={index}>{value}</MenuItem>
        ))}
        </Select>
       
      </FormControl>
    </div>
  );
}


