import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


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

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
    marginTop : theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight:theme.spacing(1),
    marginLeft:theme.spacing(1),
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
    marginTop : theme.spacing(0.2),
    marginBottom: theme.spacing(0.2),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  const cliket=()=>{
    props.setPage("Page"+props.nodeId);
  }
  return (
    
    <TreeItem
    
      label={
        <div className={classes.labelRoot} onClick={cliket}>
          <LabelIcon color="inherit" className={classes.labelIcon} fontSize="default"  />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 320,
    flexGrow: 1,
    maxWidth: 400,
    marginTop:20
  },
});

export default function GmailTreeView(props) {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['8']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 40 }} />}
    >
     
      <StyledTreeItem nodeId="1" labelText="Documents" labelIcon={Label}  setPage={props.setPage} labelInfo={props.docNumber.total}>
        <StyledTreeItem
          nodeId="6"
          labelText="Couriers"
          labelIcon={MailIcon}
          labelInfo={props.docNumber.courrier}
          color="#1a73e8"
          bgColor="#e8f0fe"
          setPage={props.setPage}
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Propales"
          labelIcon={InfoIcon}
          labelInfo={props.docNumber.propal}
          color="#e3742f"
          bgColor="#fcefe3"
          setPage={props.setPage}
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Mission letters"
          labelIcon={ForumIcon}
          labelInfo= {props.docNumber.missionLeter}
          color="#a250f5"
          bgColor="#f3e8fd"
          setPage={props.setPage}
        />
        <StyledTreeItem
          nodeId="9"
          labelText="Mission reports"
          labelIcon={LocalOfferIcon}
          labelInfo={props.docNumber.missionRaport}
          color="#3c8039"
          bgColor="#e6f4ea"
          setPage={props.setPage}
        />
        <StyledTreeItem
      nodeId="11"
      labelText="Administrative docs"
      labelIcon={LocalOfferIcon}
      labelInfo={props.docNumber.documentAmin}
      color="#3c8039"
      bgColor="#e6f4ea"
      setPage={props.setPage}
    />
        <StyledTreeItem
        nodeId="10"
        labelText="CV"
        labelIcon={LocalOfferIcon}
        labelInfo={props.docNumber.cv}
        color="#3c8039"
        bgColor="#e6f4ea"
        setPage={props.setPage}
      />
      
      </StyledTreeItem>
      <StyledTreeItem nodeId="2" labelText="recent" labelIcon={AccessTimeIcon}  setPage={props.setPage}/>
     {props.editCompte==true && <StyledTreeItem nodeId="3" labelText="Corbeille" labelIcon={DeleteIcon}  setPage={props.setPage} />}

      <Divider />

      {props.editCompte==true && props.userStatu=="Administrateur" && <StyledTreeItem nodeId="4" labelText="Setting" labelIcon={SettingsIcon}  setPage={props.setPage}/>}
      <StyledTreeItem nodeId="5" labelText="About" labelIcon={InfoIcon}  setPage={props.setPage} />
    </TreeView>
  
  );
}
