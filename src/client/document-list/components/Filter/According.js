import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import SimpleFade from './SimpleFade';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function PopperPopupState(props) {
  const classes = useStyles();

  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
        <IconButton variant="contained" color="primary" size="medium" {...bindToggle(popupState)}
          color="inherit">
          <ArrowDropDownIcon />
        </IconButton>
          <Popper {...bindPopper(popupState)} transition placement="bottom-start"  modifiers={{
            flip: {
              enabled: true,
            },
            preventOverflow: {
              enabled: true,
              boundariesElement: 'scrollParent',
            },
            arrow: {
              enabled: true,
              element: 'arrowRef',
            },
          }}>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <SimpleFade changeFilter={props.changeFilter}/>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}