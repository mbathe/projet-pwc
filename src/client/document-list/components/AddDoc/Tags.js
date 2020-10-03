import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 605,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags(props) {
  const classes = useStyles();
  const change =(valeur)=>{
    console.log(valeur);
    props.alertEmailChange(valeur);
  }

  return (
    <div className={classes.root}>
      
      <Autocomplete
        multiple
        id="tags-filled"
        options={props.email.map((email) => email)}
        /*defaultValue={props.email[0]}*/
        freeSolo
        onChange={(event, value, reason)=>change(value)}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="filled" label="Emails" placeholder="Favorites" />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
