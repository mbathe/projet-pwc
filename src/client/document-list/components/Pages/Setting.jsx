import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import server from '../../../utils/server';
import { forwardRef } from 'react';

import CircularIndeterminate from './CircularIndeterminate';


import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };




  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexGrow: 1,
      
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'begin',
      color: theme.palette.text.secondary,
    },
    grid:{
      justify:'flex-start',
      alignItems:'flex-start',
      alignContent:'flex-start',
      marginLeft:0,
    }
  }));





export default function TestEditor() {
  const classes = useStyles();
  const columns = [
    { title: 'Username', field: 'name' },
    { title: 'Email', field: 'email' },
    {
      title: 'Statu',
      field: 'statu',
      lookup: { 34: 'Administrateur', 63: 'Sécretaire', 35:'SuperAdmin', },
    },
  ];

  const [state, setState] = React.useState({
    chargin:false,
    data: [
    ],
  });
  /*
 const [chargin,setChargin] = React.useState(false);
  */
  useEffect(() => {
    server
      .getUsers()
      .then(setState)
      .catch(alert);
  }, {data:[]});

  

  return (
    <React.Fragment>
    <div className={classes.root}>
    
    { state.chargin === false && <CircularIndeterminate /> }
    { state.chargin === true && 
      <Grid container spacing={2} alignContent="begin">
        <Grid item lg={10}>
        <MaterialTable
        title="Comptes   "
        columns={columns}
        data={state.data}
        icons={tableIcons}
        
        editable={{
          onRowAdd: (newData) =>
          server.addUser(newData)
          .then(()=>{
           setState((prevState) => {
              console.log(newData);
              const data = [...prevState.data];
              data.unshift(newData);
              return { ...prevState, data };
            });
          })
          .catch(alert),
          
          onRowUpdate: (newData, oldData) =>
          server
          .setUser(state.data.indexOf(oldData),newData)
          .then(()=>{
            if (oldData) {
              setState((prevState) => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                return { ...prevState, data };
              });
            }
          })
          .catch(alert),
          onRowDelete: (oldData) =>
          server
          .deleteUser(state.data.indexOf(oldData))
          .then(()=>{
            setState((prevState) => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              return { ...prevState, data };
            });
          })
          .catch(alert),
        }}
      /> 
        </Grid>
       </Grid>
      
    }
    </div> 
    </React.Fragment>
  );
}



