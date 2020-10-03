import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
   marginRight:40,
    width: 190,
    marginLeft:45,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div >
      <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required"  fullWidth={true}>{props.label}</InputLabel>
        <Select
          native
          value={state.age}
          fullWidth={true}
          onChange={handleChange}
          name="age"
          inputProps={{
            id: 'age-native-required',
          }}
        >
        <option aria-label="None" > Tous</option>
        {props.values.map((value,index) => (
          <option value={index}>{value}</option>
        ))}
        </Select>
       
      </FormControl>
    </div>
  );
}


