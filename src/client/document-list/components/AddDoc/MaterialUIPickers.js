import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const useStyles = makeStyles((theme) => ({
    root: {
      width:220,
      marginLeft:40
    },
  }));

export default function MaterialUIPickers(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(props.date);

  const handleDateChange = (date) => {
    var options = { weekday: 'long', year: 'numeric',
                month: 'long', day: 'numeric' };
    setSelectedDate(date);
    console.log(date.toLocaleDateString('en-GB', options));
    props.alertDateChange(date);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container justify="space-around">
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="End of alert"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
      </Grid>
    </MuiPickersUtilsProvider>
    </Grid>
    </div>
  );
}