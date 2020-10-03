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
    marginLeft:40,
    width: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    type: "test",
  });
  const [age, setAge] = React.useState('Test');
  const [open, setOpen] = React.useState(false);

  const data=[...props.values];
  const handleChange = (event) => {
    setState({
      type: event.target.value,
    });
    setAge(event.target.value);
    const valeur =data[event.target.value];
    props.typeChange(valeur)
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div >
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required"  fullWidth={true}>{props.label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          fullWidth={true}
          onChange={handleChange}
          name="type"
          inputProps={{
            id: 'age-native-required',
          }}
        >
        {props.values.map((value,index) => (
          <MenuItem value={index}>{value}</MenuItem>
        ))}
        </Select>
       
      </FormControl>
    </div>
  );
}


