/*
import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from "@material-ui/core/TextField";
import server from '../../utils/server';


const testinput =(event)=>{
console.log(event.target.value);
}
var fileInput = React.createRef();

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const onChange=(e)=>{
  console.log("sa marche");
}



export default function UploadButtons() {
  const [state,setState]=React.useState(
    {
    filter:{
        type:"Tous",
        season:"Tous",
        activityArea:"Tous",
        serviceLine:"Tous",
        country:"Tous",
        client:"Tous",
    },
    data:[]
    }
  );
  useEffect(
    () => {
      server
        .datafiltere(state.filter)
        .then((valeur)=>{
         console.log(valeur);
        })
        .catch(alert);
    },
    { data: [] }
  );
  const classes = useStyles();
  const inputEl = React.useRef(null);
  const onButtonClick = () => {
    console.log("inside")
    // `current` points to the mounted file input element
    inputEl.current.click();
  };
  const uploadFile=()=>{
    server
    .datafiltere(state.filter)
    .then((valeur)=>{
     console.log(valeur);
    })
    .catch(alert);
  }
  
 
  return (
    <div className={classes.root}>
        <Button onClick={uploadFile}>
        tester
        </Button>
    </div>
  );
}

*/



import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import server from '../../utils/server';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:20,
    marginLeft:45

  },
  input: {
    display: 'none',
  },
}));

const uploadFile=(file)=>{
  var fr = new FileReader();
    fr.fileName = file.name;
    fr.onload = function(e) {
      const obj = {
        filename: file.name,
        mimeType: file.type,
        bytes: [...new Int8Array(e.target.result)]
      };
      server
      .uploadFileTest(obj)
      .then((val)=>{console.log(val)})
       .catch(alert);
   }  
  fr.readAsArrayBuffer(file);
}


export default function UploadButtons(props) {
  const inputEl = React.useRef(null);
  const change=()=>{
    console.log(inputEl.current.files[0]);
    uploadFile(inputEl.current.files[0]);
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

