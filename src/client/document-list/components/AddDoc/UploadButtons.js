import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:20,
    marginLeft:45

  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons(props) {
  const inputEl = React.useRef(null);
  const change=()=>{
    console.log(inputEl.current.files[0]);
    props.uploadFile(inputEl.current.files[0]);
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*,.doc,.pdf,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        ref={inputEl}
        onChange={change}
      />
      <label htmlFor="contained-button-file">
        <Button
        variant="contained"
        color="primary"
        component="span"
        startIcon={<CloudUploadIcon />}
      >
        Upload file
      </Button>
      </label>
    </div>
  );
}

