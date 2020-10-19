/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Playground(props) {
  const defaultProps = {
    options: props.values,
    getOptionLabel: (value) => value,
  };
  const change=(valeur)=>{
    props.change(valeur);
  }
  const flatProps = {
    options: props.values.map((value) => value),
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: props.length, marginLeft:props.margin }}>
      <Autocomplete
        {...defaultProps}
        id="free-solo-demo"
        freeSolo
        onInputChange={(event, value, reason)=>change(value)}
        onChange={(event, value, reason)=>change(value)}
        renderInput={(params) => <TextField {...params} label={props.label} margin="normal" required={props.isrequere}/>}
      />
    </div>
  );

}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
