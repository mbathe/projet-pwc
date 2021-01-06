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
import AddForm from './AddForm';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function PopperPopupState(props) {
  const classes = useStyles();
  const inputEl = React.useRef();
  const  closeFilter= ()=>{
    inputEl.current.click();
  }
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
        <Tooltip title="Search options">
        <IconButton variant="contained" color="primary" size="medium" {...bindToggle(popupState)}
          color="inherit" ref={inputEl}>
          <ArrowDropDownIcon />
        </IconButton>
        </Tooltip>
          <Popper {...bindPopper(popupState)} transition placement="bottom-end"  modifiers={{
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
                <AddForm changeFilter={props.changeFilter} closeFilter={closeFilter} suggestion={props.suggestion} suggestionSelect={props.suggestionSelect} resetFilter={props.resetFilter}/>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  );
}