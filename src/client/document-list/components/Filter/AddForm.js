import React, {useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import NativeSelects from "./NativeSelects";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import server from '../../../utils/server';
import MaterialUIPickers from "./MaterialUIPickers";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";


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
    width: 574,
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
    marginLeft:18,
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
  
  const [state, setState] = React.useState(
    {
      type:"Tous",
      client:"Tous",
      country:"Tous",
      activityArea:"Tous",
      serviceLine:"Tous",
      season:"Tous",
      dateBegin:new Date(),
      dateEnd:new Date(),
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
        .getSuggessionFilter()
        .then(setSuggestion)
        .catch(alert);
    },
    { data: [] }
  );
  

  const [isSend,setIsSend]= React.useState(false);
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
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
      olstate.client=valeur;  
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
 const dateBeginChange =(valeur)=>{
  setState((prevState)=>{
    const olstate ={...prevState};
    olstate.dateBegin=valeur;
    return olstate;
  });
}
const dateEndChange =(valeur)=>{
  setState((prevState)=>{
    const olstate ={...prevState};
    olstate.dateEnd=valeur;
    return olstate;
  });
}
  const showState=()=>{
    var olstate ={ 
    type:state.type,
    client:state.client,
    country:state.country,
    activityArea:state.activityArea,
    serviceLine:state.serviceLine,
    season:state.season,
    }
    props.changeFilter(olstate);
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
                  Apply filters
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
                      <div style={{ width: 215 }}>
                        <TextField
                          required
                          label="Le nom contient"
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
                    <Grid container justify="center" spacing={3}>
                      <Grid item>
                        <Grid item xs={12}>
                        <NativeSelects values={suggestion.customer} label="Customer"  typeChange={customerChange}/>                        </Grid>
                      </Grid>
                      <Grid item>
                      <NativeSelects values={suggestion.activityArea} label="Activity area"  typeChange={activityAreaChange}/>                      </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={3}>
                      <Grid item>
                      <NativeSelects values={suggestion.servileLine} label="Service line"  typeChange={serviceLineChange}/>
                      </Grid>
                      <Grid item>
                      <NativeSelects values={suggestion.season} label="season"  typeChange={seasonChange}/>                      </Grid>
                    </Grid>
                    <Grid container justify="space-between" spacing={1}>
                      <Grid item>
                      <div style={{marginLeft:35}}>
                      <NativeSelects values={suggestion.country} label="Country"  typeChange={countryChange}/> 
                      </div>  
                      </Grid>
                      <Grid item>
                      <div style={{marginRight:30}}>
                      <FormControlLabel className={classes.formLabel}
                  control={
                    <Switch
                      checked={state.gilad}
                      onChange={handleChange}
                      name="gilad"
                    />
                  }
                  label="Gilad Gray"
                />
                   </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container justify="center" spacing={5}>
                    
                  {state.gilad === true && (
                    <Grid item >
                     <div style={{marginLeft:15}}>
                      <MaterialUIPickers alertDateChange={dateBeginChange} />
                      </div>
                    </Grid>
                  )}
                
                  
                  {state.gilad === true && (
                    <Grid item >
                     <div style={{marginRight:30}}>
                      <MaterialUIPickers alertDateChange={dateEndChange}/>
                      </div>
                    </Grid>
                  )}
                  </Grid>
                  <Grid container justify="space-between" spacing={5}>
                    
                  <Grid item>
                  <div style={{marginLeft:60,marginTop:20}}>
                  <Button color="primary">reset</Button>
                  </div>
                  </Grid>
                  <Grid item>
                  <div style={{marginRight:60,marginTop:20}}>
                  <Button variant="contained" color="primary" disableElevation onClick={()=>{showState()}}>
                     search
                   </Button>
                   </div>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </form>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
