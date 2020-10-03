import React , { useState, useEffect } from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchAppBar from './SearchAppBar';
import TitlebarGridList from './TitlebarGridList';
import StyledTreeItem from './StyledTreeItem';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Model from './AddDoc/Model';
import server from '../../utils/server';

import AboutPage from './Pages/About';
import CorbeillePage from './Pages/Corbeille';
import CourrierPage from './Pages/Courrier';
import CVPage from './Pages/CV';
import DocumentsPage from './Pages/Documents';
import MissionLetterPage from './Pages/MissionLetter';
import MissionRapport from './Pages/MissionRapport';
import PropalePage from './Pages/Propales';
import RecentPage from './Pages/Recent';
import SettingPage from './Pages/Setting';
import SearchPage from './Pages/SearchPage';
import AdmininstratifPage from './Pages/DocumentAmin';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#bf360c',
    },
    secondary: {
      main: '#d84315',
    },
  },
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0),
    borderRadius: 50,
    height: 55,
    hover:{
     backgroundColor: '#d84315',
  }
},
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop:50,
    backgroundColor: theme.palette.background.default,
    position:'relative',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Bouton(props) {
    const classes = useStyles();
    return (
      
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={()=>props.clique()}
          className={classes.button}
          startIcon={<AddIcon fontSize="large" />}
        >
          Document
        </Button>
  
    );
  }

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [searchVal,setSearchVal]=React.useState("doc");
  const [prevPage,setPrevPage] =React.useState("Page1");
  const [rechargesearch,setRechargesearch] =React.useState(false);
  const [dataNumber,setDataNumber] =React.useState({
    total:0,
    propal:0,
    courrier:0,
    cv:0,
    documentAmin:0,
    missionLeter:0,
    missionRaport:0,
  }
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectPage,setSelectPage]=React.useState("SearchPage");
  const [userStatu,setUserStatu]= React.useState("Secrétaire");
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
  const setPage=(valeur)=>{
    setSelectPage(valeur);
    if(valeur!=="SearchPage"){
      setPrevPage(valeur);
    }
  }
  useEffect(
    () => {
      server
        .datafiltere(state.filter)
        .then((valeur)=>{
          console.log(valeur)
         setState((prevStat)=>{
           return {filter:prevStat.filter,data:valeur}
         })
        })
        .catch(alert);

        server
        .getDocumentNumber()
        .then((valeur)=>{
          console.log(valeur);
         setDataNumber(valeur);
        })
        .catch(alert);
    },
    { data: [] }
  );
 const changeValueSearch = (val)=>{
   if(val!==""){
    setSearchVal(val);
    setPage("SearchPag")
    setTimeout(()=>{setPage("SearchPage");}, 5);
    //console.log("changement de valeur inter "+val);
    /*
    setTimeout(()=>{setPage("SearchPage");}, 50);
    if(selectPage!=="SearchPage"){
      setTimeout(()=>{setPage("SearchPage");}, 50);
    }
    */
    //setPage("Page1");
   // setTimeout(()=>{setPage("SearchPage");}, 100);
   }
 }
  const setStateFilter =(valeur)=>{
      server
      .datafiltere(valeur)
      .then((val)=>{
       setState((prevStat)=>{
         return {filter:valeur,data:val}
       })
      })
      .catch(alert);

  }
  const [clique, setClique] = React.useState(false);

  
  const addDocument =()=>{
    setClique(!clique);
  }

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <SearchAppBar dataSearch={state.data} changeFilter={setStateFilter} setStatu={(valeur)=>{setUserStatu(valeur)}} handleDrawerOpen={handleDrawerOpen} open={open} search={changeValueSearch} setPage={setPage} prevPage={prevPage}/>
     <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

       {userStatu=="Administrateur" &&<Bouton clique={addDocument}/>}
        <StyledTreeItem setPage={setPage} docNumber={dataNumber}/>
        <Divider />
      </Drawer>
      <main  className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}>
        <div className={classes.toolbar} />
        <div className="main-wrapper">
            {selectPage=="Page1" && <DocumentsPage />}
            {selectPage=="Page2" && <RecentPage />}
            {selectPage=="Page3" && <CorbeillePage />}
            {selectPage=="Page4" && <SettingPage />}
            {selectPage=="Page5" && <AboutPage />}
            {selectPage=="Page6" && <CourrierPage />}
            {selectPage=="Page7" && <PropalePage />}
            {selectPage=="Page8" && <MissionLetterPage />}
            {selectPage=="Page9" && <MissionRapport />}
            {selectPage=="Page10" && <CVPage />}  
            {selectPage=="Page11" && <AdmininstratifPage />}  
            {selectPage=="SearchPage" && <SearchPage searchValue={searchVal}  />}

        </div>
      </main>
    </div>

    {clique ===true && <Model closeadd={addDocument}/>}
    </ThemeProvider>
    
  );
}
