import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { GoogleLogin } from 'react-google-login';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import According from './Filter/According';
import server from '../../utils/server';
import { TextField } from "@material-ui/core";
import Tooltip from '@material-ui/core/Tooltip';



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
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1.3,
    maxHeight:30,
    postion:'absolute'
  },
  
  growe: {
    flexGrow: 0.2,
  },
  growee: {
    flexGrow: 1.5,
  },
  growopen: {
    flexGrow: 1.9,
  },
  growopen2: {
    flexGrow: 0.6,
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
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIconn: {
    padding: theme.spacing(2, 0),
    position: 'absolute',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  inputRoot: {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  inputInput: {
    height: 20,
    padding: theme.spacing(1, 1, 1, 0),
    color: "inherit",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create("width"),
    width: "600",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  tooltip:{
    fontSize: theme.typography.pxToRem(14),
    labelContainer :{

        fontSize: theme.typography.pxToRem(14),
      }
  }
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    islogin: false,
    email: '',
    imageUrl: '',
    name: '',
  }); 
const [autocomple,setAutocomple] =React.useState([]);
 const [notification,setNotification]=React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const inputEl = React.useRef(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [valSearch,setValSearch]=React.useState("");
  useEffect(
    () => {
      server
        .getSugessiontName()
        .then((val)=>{
          setAutocomple(val)
        })
        .catch(alert);
     
    },
    { data: [] }
  );

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const responseGoogle = response => {
    console.log(response);
    setState({
      islogin: true,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name,
    });

    server.
    getStatu(response.profileObj.email)
    .then((val)=>{
      console.log(val);
      if(val==="Administrateur" || val==="Secrétaire"){
        props.setEditCompte(true)
      }
      props.setStatu(val);
    })
    .catch(alert);

    const tabm =[response.profileObj.email];
    server.
    addSuggestion(tabm,7)
    .then((val)=>{
      console.log(val);
    })
    .catch(alert);

    server.
    getNotification(response.profileObj.email)
    .then((val)=>{
      console.log(val);
     setNotification(val);
    })
    .catch(alert);

  };
  const change =(event, value) => {
   // console.log(e.target.value);
   if(value!==""){
    setValSearch(value);
    console.log("valeur en temps reel1 "+valSearch)
   }else{
    setValSearch("");
   }
    
  };
  
  const searchFilter=(val)=>{
    var temps = {...val,reseach:valSearch}
    props.changeFilter(temps);
    console.log(temps);
  }

  const search = ()=>{
    console.log("veur de recherche2 "+valSearch);
    if(valSearch!==""){
      props.search(valSearch);    
    }else{
     console.log("on conserve2")
    }
  }
  const searcheSelect = (event,value,reason)=>{
    console.log("veur de recherche3 "+value);
    if(reason ==="select-option"){
      props.search(value);    
      setValSearch(value);
    }else{
     console.log("on conserve3")
    }
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  
  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      search();
    }
  }
  
  console.log(props.suggestionSelect);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.grow} onKeyPress={handleKeyPress}>
        <AppBar
        >
          <Toolbar>
           
          <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, props.open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
          PwC
       </Typography>
        
       {props.open==true &&<div className={classes.growopen} />}
       {props.open==false &&<div className={classes.growee} />}
            
       <div className={classes.search}>
       <Autocomplete
         id="free-solo-demo"
         freeSolo
         fullWidth
         classes={{ inputRoot: classes.inputRoot }}
         onChange={searcheSelect}
        options={autocomple.map((option) => option.name)}
        onInputChange={change}
         renderInput={(params) => (
           <div style={{ display: "flex" }} ref={params.InputProps.ref}>
             <div style={{ paddingTop: 2 }}>
               <According changeFilter={searchFilter} suggestion={props.suggestion} suggestionSelect={props.suggestionSelect} resetFilter={props.resetFilter}/>
             </div>
             <TextField
               fullWidth
               {...params}
               placeholder="Search…"
               style={{ color: "white" }}
               className={classes.inputInput}
               style={{ color: "white" }}
             />
             <IconButton style={{ color: "white" }} onClick={search}>
               <SearchIcon />
             </IconButton>
           </div>
         )} 
       />
     </div>
            {state.islogin == true && props.open==true &&<div className={classes.growopen2} />}
            {state.islogin == true && props.open==false &&<div className={classes.grow} />}
            {state.islogin == true && (
              <div className={classes.sectionDesktop}>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={notification} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </div>
            )}
            {state.islogin == true && <div className={classes.growe} />}
            {state.islogin == false && <div className={classes.grow} />}
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
            {state.islogin == true && (
              <div className={classes.sectionDesktop}>
              <Tooltip title={<div><Typography fontSize = {14}  variant='body2'>Compte Google</Typography><Typography fontSize = {8}  variant='body2' color='textSecondary'>{state.name}</Typography><Typography fontSize = {8}  variant='body2' color='textSecondary'>{state.email}</Typography></div>} className={classes.tooltip}>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <Avatar alt="Cindy Baker" src={state.imageUrl} />
                </IconButton>
                </Tooltip>
              </div>
            )}
            {state.islogin === false && (
              <GoogleLogin
                clientId="102524147780-qspuuvgpgetinr8ppra852crd4t4lh08.apps.googleusercontent.com"
                render={renderProps => (
                  <Button
                    color="inherit"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Login
                  </Button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            )}
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}

