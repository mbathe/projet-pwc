import React,{useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import NativeSelects from "./NativeSelects";
import Tags from "./Tags";

import MaterialUIPickers from "./MaterialUIPickers";
import UploadButtons from "./UploadButtons";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import SendIcon from "@material-ui/icons/Send";
import CircularStatic from "./CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import AutoComplete from './AutoComplete';
import server from '../../../utils/server';
import Background from './Background';
import Snackbar from './Snackbar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bf360c",
    },
    secondary: {
      main: "#d84315",
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: 650,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "rgb(249, 249, 249)",
    paddingBottom: 40,
  },
  grid: {
    display: "flex",
    alignItems: "center",
  },
  div: {
    display: "flex",
    width: "80%",
    alignItems: "flex-center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  tipho: {
    width: "100%",
    marginLeft: 30,
    alignItems: "end",
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
    alignItems: "center",
    textAlign: "center",
    marginLeft:9,
  },
  button: {
    width: 150,
    marginTop: 20,
    borderRadius: 20,
    height: 45,
    paddingLeft: 30,
    paddingRight: 30,
  },
  pos: {
    marginBottom: 12,
    marginTop: 20,
    marginRight:55,
    fontSize: 12,
  },
  circul: {
    marginBottom: 12,
    marginTop: 20,
    marginLeft: 60,
    marginRight:80,
  },
  roote: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  input: {
    textAlign: "center",
    alignItems: "center",
    maxLength: 200,
  },
  iconButton:{
    alignItems:'end',
    display:'flex',
    justifyContent:'space-between'
  },
});

export default function SimpleCard(props) {
  const [isPropal, setIsPropal] = React.useState({
    gilad: true,
  });
  const [progress, setProgress] = React.useState(0);
  const [uploadStatus,setUploadStatus] =React.useState({
    status :"success",
    message:"data sent successfully!",
    isEmpty:false,
  });
  const [endSend,setEndSend]=React.useState(false);
  const [fille,setFile]=React.useState({});
  const [state, setState] = React.useState(
    {
      name:"",
      type:"",
      customer:"",
      activityArea:"",
      serviceLine:"",
      country:"",
      season:"",
      alertDate: new Date(),
      alertEmail:[],
      fileName:"no file selected",
      fileType:"",
      user:"",
      fileId:"",
      date:new Date().toLocaleDateString(),
      editeLink:"",
      download:"",
      description:"",
    }
  ) 
  const [suggestion, setSuggestion] = React.useState({
      type:[],
      customer:[],
      country:[],
      activityArea:[],
      season:[],
      servileLine:[],
      email: [],
  });

  
  useEffect(
    () => {
      server
        .getSuggession()
        .then(setSuggestion)
        .catch(alert);
    },
    { data: [] }
  );
  const [charing, setChargin] = React.useState(false);
  const [isSend,setIsSend]= React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [labelName,setLabelName] =React.useState("Document name")
  var obj={};
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
   const [isrequere,setIsrequere]=React.useState(true);
  const nameChange =(e)=>{
     var name = e.target.value;
     setState((prevState)=>{
       const olstate ={...prevState};
       olstate.name=name;
       return olstate;
     })
  }
  const typeChange =(valeur)=>{
    setState((prevState)=>{
      const olstate ={...prevState};
      olstate.type=valeur;
      if(valeur=="Courrier Entrant"){
          setIsPropal({gilad: true})
      }else if(valeur=="Courrier Sortant"){

      }else{
        setIsPropal({gilad: false})
      }

      if(valeur=="Curriculum Vitae"){
        setLabelName('Collaborator Name');
        setIsrequere(false);
      }else{
        setLabelName('Document Name');
        setIsrequere(true);
     }

      return olstate;
    });
    

   /*setState((prevState)=>{
      const olstate ={...prevState};
      olstate.type=type;
      return olstate;
    })
    */
  }
  const customerChange =(valeur)=>{
    setState((prevState)=>{
      var olstate ={...prevState};
      olstate.customer=valeur;  
      return olstate;
    });
   
  }
  const activityAreaChange =(valeur)=>{
    setState((prevState)=>{
      const olstate ={...prevState};
      olstate.activityArea=valeur;
      return olstate;
    });
    
  }
  const serviceLineChange =(valeur)=>{
    setState((prevState)=>{
      const olstate ={...prevState};
      olstate.serviceLine=valeur;
      return olstate;
    });
   
  }
  const countryChange =(valeur)=>{
    setState((prevState)=>{
      const olstate ={...prevState};
      olstate.country=valeur;
      return olstate;
    });
    
  }
  const seasonChange =(valeur)=>{
    setState((prevState)=>{
      const olstate ={...prevState};
      olstate.season=valeur;
      return olstate;
    });
    
  }
  const alertDateChange =(valeur)=>{
    setState((prevState)=>{
      const olstate ={...prevState};
      olstate.alertDate=valeur;
      return olstate;
    });
  }
  const alertEmailChange =(valeur)=>{
    setState((prevState)=>{
      const olstate ={...prevState};
      olstate.alertEmail=valeur;
      return olstate;
    });
  }
  const fileChange =(valeur)=>{
    setState((prevState)=>{
      var olstate ={...prevState};
      olstate.fileId=valeur.fileId;
      olstate.download=valeur.doanload;
      olstate.editeLink=valeur.editeLink;
      console.log("alstate");
      console.log(olstate);
      return olstate;
    });
  }
  const fileupl = (newData) =>
  new Promise((resolve) => {
    fileChange(newData);
    resolve();
  });
  
  const uploadFile=(file)=>{
    var fr = new FileReader();
    setChargin(true);
    fr.fileName = file.name;
    fr.onload = function(e) {
      setProgress(100);
      const obj = {
        filename: file.name,
        mimeType: file.type,
        bytes: [...new Int8Array(e.target.result)]
      };
      setFile(obj);
     console.log( e.target.result);
     setState((prevState)=>{
      const olstate ={...prevState};
      olstate.fileName=obj.filename;
      olstate.fileType=obj.mimeType;
      return olstate;
    });
    setChargin(false);
    setProgress(0);
  }
  fr.onprogress=(e)=>{
    console.log(e);
    const val=(e.loaded/e.total)*100;
    setProgress(val);
  }
  fr.readAsArrayBuffer(file);

 
  }
  const sendData=()=>{
    var message="";
    var empty = false;
    if(state.name==""){
      message="the name field cannot be empty\n";
      empty = true;
    }else if(state.type==""){
      message="the type field cannot be empty\n";
      empty = true;
    }else if(state.fileName=="no file selected"){
      message="you must select a file\n";
      empty = true;
    }if(state.customer=="" && isrequere===true){
      message="the customer field cannot be empty\n";
      empty = true;
    }if(state.season==""){
      message="the season field cannot be empty\n";
      empty = true;
    }if(state.serviceLine==""){
      message="the serviceLine field cannot be empty\n";
      empty = true;
    }if(state.activityArea==""){
      message="the Business unit field cannot be empty\n";
      empty = true;
    }if(state.country==""){
      message="the country field cannot be empty\n";
      empty = true;
    }
    if (empty){
      setUploadStatus({
        status:"error",
        message:message,
        isEmpty:true,
      });
      setEndSend(true);
    }else{
      setIsSend(true);
      server
      .uploadFiles(fille)
      .then((valeur)=>{
        var olstate ={...state};
        olstate.fileId=valeur.fileId;
        olstate.download=valeur.doanload;
        olstate.editeLink=valeur.editeLink;
        olstate.description=valeur.description;
        olstate.alertDate=olstate.alertDate.toString();
        server
        .addData(olstate)
        .then((val)=>{
          setIsSend(false);
          setEndSend(true);
          console.log(val);
          setTimeout(()=>{props.closeadd();}, 3000)
          
        })
       .catch((aler)=>{
        setUploadStatus({
          status:"error",
          message:"failure to send",
          isEmpty:true,
        });
        setIsSend(false);
        setEndSend(true);
        alert(aler);
        setTimeout(()=>{props.closeadd();}, 1000)
       });
      })
      .catch((alert)=>{console.log("message"+alert)});
    }
    
  }
  const showState=()=>{
    console.log(state);
  }
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
 

  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardContent>
          <form>
            <div className={classes.roote}>
              <Grid
                container
                spacing={5}
                justify="center"
                className={classes.roote}
              >
                <Grid item xs={12}>
                <div className={classes.iconButton}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    variant="h1"
                    component="h1"
                  >
                    Add Document
                  </Typography>
                  
                  
                  <IconButton
                    aria-label="delete"
                    aria-controls="delete"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={()=>{
                        props.closeadd()
                    }}
                  >
                    <ClearIcon />
                  </IconButton>
                  </div>
                </Grid>
                <Grid
                  container
                  spacing={5}
                  justify="center"
                  className={classes.roote}
                >
                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={3}>
                      <Grid item>
                      <div style={{ width: 320 }}>
                        <TextField
                          required
                          label={labelName}
                          className={classes.input}
                          fullWidth
                          onChange={(e)=>nameChange(e)}
                        />
                        </div>
                      </Grid>
                      <Grid item>
                        <NativeSelects values={suggestion.type} label="Type"  typeChange={typeChange}/>
                      </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                      <Grid item>
                        <Grid item xs={12}>
                          <AutoComplete label="Customer" length={320} change={customerChange} values={suggestion.customer} isrequere={isrequere}/>
                        </Grid>
                      </Grid>
                      <Grid item>
                      <AutoComplete label="Business unit" length={220} margin={40} change={activityAreaChange} values={suggestion.activityArea} isrequere={true}/>
                      </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={2} isrequere={true}>
                      <Grid item>
                      <AutoComplete label="Service line" length={320} change={serviceLineChange} values={suggestion.servileLine} isrequere={true}/>
                      </Grid>
                      <Grid item>
                      <AutoComplete label="Country" length={220} margin={40} change={countryChange} values={suggestion.country} isrequere={true}/>
                      </Grid>
                    </Grid>
                    <Grid container justify="begin" spacing={2}>
                      <Grid item>
                      <AutoComplete label="Season" length={320} margin={30} change={seasonChange} values={suggestion.season} isrequere={true}/>
                      </Grid>
                      <Grid item>
                      {isPropal.gilad === true && (
                        <Grid item >
                          <MaterialUIPickers alertDateChange={alertDateChange} date={state.alertDate}/>
                        </Grid>
                      )}
                      </Grid>
                    </Grid>
                  </Grid>
                  {isPropal.gilad === true && (
                    <Grid container justify="center" spacing={5}>
                      <Grid item>
                        <Grid item xs={12} spacing={5}>
                          <Tags alertEmailChange={alertEmailChange} email={suggestion.email}/>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                  <Grid container justify="space-between" spacing={5}>
                    <Grid item spacing={1}>
                      <UploadButtons uploadFile={uploadFile} />
                    </Grid>
                    <Grid item>
                      {charing === false && (
                        <div style={{maxWidth:450}}>
                        <Typography
                          className={classes.pos}
                          color="textSecondary"
                          variant='body2'
                          noWrap={true}
                        >
                          {state.fileName}
                        </Typography>
                        </div>
                      )}
                      {charing === true && (
                        <div className={classes.circul}>
                          <CircularStatic value={progress}/>
                        </div>
                      )}
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={5}>
                    <Grid item>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            sendData();
                          }}
                          className={classes.button}
                          endIcon={<SendIcon fontSize="large" />}
                        >
                          Send
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </form>
        </CardContent>
      </Card>
      <Snackbar open={endSend} close={()=>{setEndSend(false); setUploadStatus({
        status :"success",
        message:"data sent successfully!",
        isEmpty:false,
      });}} message={uploadStatus.message} status={uploadStatus.status}/>
      {isSend==true && <  Background/>}

    </ThemeProvider>
  );
}



  