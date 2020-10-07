import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SimpleCard from './AddForm';



const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    marginLeft:'auto',
    marginRight:'auto',
    position:'relative'

  },
  container: {
    display: 'flex',
    marginLeft:'auto',
    marginRight:'auto',
  },
  paper: {
    marginLeft:'auto',
    marginRight:'auto',
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleFade(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
          <Paper elevation={4} className={classes.paper}>
            <SimpleCard changeFilter={props.changeFilter} />
          </Paper>
        
      </div>
    </div>
  );
}