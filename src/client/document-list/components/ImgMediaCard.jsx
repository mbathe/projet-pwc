import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Tooltip from '@material-ui/core/Tooltip';
import server from '../../utils/server';



import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 223,
    height:300,
    marginLeft:15,
    marginRight:15,
    marginTop:15,
    margiBottom:15,
  },
  button:{
      height: 35,
      marginLeft:110,
  },
  buttone:{
    height: 35,
 },
  image:{
    paddingTop:"2%",
    position:"relative",
    overflow: "hidden",
    backgroundSize:"contain",
    backgroundPosition:"-0px -0px"
  },
  tooltip:{
    fontSize: theme.typography.pxToRem(14),
    labelContainer :{

        fontSize: theme.typography.pxToRem(14),
      }
  }
}));
function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function ImgMediaCard(props) {
  
  const remove=()=>{
    handleClose();
    console.log(document.id)
    console.log("valeur en string"+props.document.id.toString())
    props.delete(props.document);
    server
      .removeData(props.document)
      .then((val)=>{
        console.log(val);
       
      })
      .catch(alert);
  }
  const classes = useStyles();
  const longText = `
comment faire la guerre en  algerié sans trop gaspiler les autres car personne n'est assez fort pour
`;

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 const dialog = (
  <div>
    <Dialog
      open={true}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        Delete
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
        <Typography fontSize = {6} noWrap={true} variant='body2'>
        are you sure you want to delete the {props.document.name} document
       </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={remove} color="primary">
           Delete
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

  return (
    <div>
    <Card className={classes.root}>
      <Link style ={{textDecoration :'none'}} href={props.document.editionLien} target="_blank">
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          height="200"
          key={new Date().toString()}
          image= {props.document.description}
        />
        <CardContent>
        <Tooltip title={<Typography fontSize = {8}  variant='body2'>{props.document.name+"_"+props.document.type+"_"+props.document.serviceLine+"_"+props.document.client+"_"+props.document.activityArea+"_"+props.document.country+"_"+props.document.season} </Typography>} className={classes.tooltip} >
          <Typography fontSize = {6} noWrap={true} variant='body2'>
          {props.document.name}
          </Typography>
          </Tooltip>
        </CardContent>
      </CardActionArea>
       
      </Link>
      <CardActions>
      {
        props.editCompte ===true &&
      <IconButton
      className={classes.buttone}
      aria-label="delete"
      aria-controls="delete"
      aria-haspopup="true"
      color="inherit"
      onClick={handleClickOpen}
    >
      <ClearIcon />
    </IconButton>
      }
    <Link href={props.document.download}>
    <IconButton
    aria-label="delete"
    aria-controls="delete"
    aria-haspopup="true"
    color="inherit"
    className={classes.button}
  >
    <CloudDownloadIcon />
  </IconButton>
  </Link>
       
      </CardActions>
    </Card>
    {open==true && dialog}
    </div>
  );
}