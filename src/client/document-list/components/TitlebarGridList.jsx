/*
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import server from '../../utils/server';


import ImgMediaCard from './ImgMediaCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from '@material-ui/core/Grid';
import CircularIndeterminate from './CircularIndeterminate';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    marginLeft: 70,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  roote: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();
  const [chargin,setChargin] = React.useState(true);
  const [theFirst,setTheFirst]=React.useState(true);
  const [hasmore,setHasmore]=React.useState(true);
  const [state, setState] = React.useState({
    chargin: false,
    statu: 'admin',
    data: [],
  });
  useEffect(
    () => {
      if(theFirst){
      setTheFirst(false);
      server
        .getDocuments(state.data.length)
        .then((val)=>{
          console.log(val.data.length);
          setState(val)
        })
        .catch(alert);
      }
    },
    { data: [] }
  );

  return (
   
    <InfiniteScroll
   
      dataLength={state.data.length} //This is important field to render the next data
      next={()=>{
        setChargin(true);
        console.log('sa marche');
        if(state.chargin===true){
          server
          .getDocuments(state.data.length)
          .then((dato)=>{
           if(dato.data.length==0){
             setHasmore(false);
           }
            setState((prevState) => {
              console.log(dato.data.length);
              var dataf= [...prevState.data,...dato.data];
              return {
                chargin: prevState.chargin,
                statu: prevState.statu,
                data: dataf,
              }});
          })
          .catch(alert);
        }}
          }
      hasMore={hasmore}
      loader={ 
    <div style={{ display: 'flex', alignItems: 'center', height:80 }}>
     {chargin==true && <CircularIndeterminate />}
    </div>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>You have seen it all!</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={()=>{console.log("test")}}
      pullDownToRefresh
      pullDownToRefreshThreshold={70}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      }
     
    >
      {
        <div className={classes.roote}>
          <Grid container spacing={0} justify="center">
            {state.data.map((document, index) => (
              <div key={index}>
                <Grid xl="auto">
                  <ImgMediaCard document={document} key={"" + index} index={index} />
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      }
    </InfiniteScroll>
   
  );
}

*/

/*
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import server from '../../utils/server';


import ImgMediaCard from './ImgMediaCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from '@material-ui/core/Grid';
import CircularIndeterminate from './CircularIndeterminate';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    marginLeft: 70,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  roote: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();
  const [chargin,setChargin] = React.useState(true);
  const [theFirst,setTheFirst]=React.useState(true);
  const [hasmore,setHasmore]=React.useState(true);
  const [state, setState] = React.useState({
    indexfin:0,
    chargin: false,
    statu: 'admin',
    data: [],
  });
  useEffect(
    () => {
      if(theFirst){
      setTheFirst(false);
      server
        .getSpecific(state.indexfin,"Propale technique","Propale Finacière ")
        .then((val)=>{
          console.log(val.data.length);
          setState(val)
        })
        .catch(alert);
      }
    },
    { data: [] }
  );

  return (
   
    <InfiniteScroll
   
      dataLength={state.data.length} //This is important field to render the next data
      next={()=>{
        setChargin(true);
        console.log('sa marche');
        if(state.chargin===true){
          server
          .getSpecific(state.indexfin,"Propale technique","Propale Finacière ")
          .then((dato)=>{
           if(dato.data.length==0){
             setHasmore(false);
           }
            setState((prevState) => {
              console.log(dato.data.length);
              var dataf= [...prevState.data,...dato.data];
              return {
                indexfin:dato.indexfin,
                chargin: prevState.chargin,
                statu: prevState.statu,
                data: dataf,
              }});
          })
          .catch(alert);
        }}
          }
      hasMore={hasmore}
      loader={ 
    <div style={{ display: 'flex', alignItems: 'center', height:80 }}>
     {chargin==true && <CircularIndeterminate />}
    </div>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>You have seen it all!</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={()=>{console.log("test")}}
      pullDownToRefresh
      pullDownToRefreshThreshold={70}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      }
     
    >
      {
        <div className={classes.roote}>
          <Grid container spacing={0} justify="center">
            {state.data.map((document, index) => (
              <div key={index}>
                <Grid xl="auto">
                  <ImgMediaCard document={document} key={"" + index} index={index} />
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      }
    </InfiniteScroll>
   
  );
}
*/

/* eslint-disable no-use-before-define */
import server from '../../utils/server';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



import ImgMediaCard from './ImgMediaCard';
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from '@material-ui/core/Grid';
import CircularIndeterminate from './CircularIndeterminate';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    marginLeft: 70,
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  roote: {
    flexGrow: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
}));



export default function ComboBox() {
  const classes = useStyles();
  const [state, setState] = React.useState([]);
  const [hasmore,setHastmore]=React.useState(true);
  const change = (e) => {
    console.log(e.target.value);
    if(e.target.value!==""){
      setHastmore(true)
      server
      .search(e.target.value)
      .then(val => {
        console.log(val);
        setState(val);
        setHastmore(false);
      })
      .catch(alert);
    }
  };
  
  return (
    <div>
    <Autocomplete
      id="combo-box-demo"
      options={state}
      freeSolo={true}
      filterOptions={(options, state) => options}
      getOptionLabel={option => option.name}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField {...params} label="Combo box" variant="outlined" onChange={change}/>
      )}
    />
    <InfiniteScroll
   
      dataLength={state.length} //This is important field to render the next data
      next={()=>{
        console.log("sa marche")
        }
          }
      hasMore={true}
      loader={ 
    <div style={{ display: 'flex', alignItems: 'center', height:80 }}>
      {hasmore == true &&<CircularIndeterminate />}
    </div>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>You have seen it all!</b>
        </p>
      }
      // below props only if you need pull down functionality
      refreshFunction={()=>{console.log("test")}}
      pullDownToRefresh
      pullDownToRefreshThreshold={70}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
      }
     
    >
      {
        <div className={classes.roote}>
          <Grid container spacing={0} justify="center">
            {state.map((document, index) => (
              <div key={index}>
                <Grid xl="auto">
                <ImgMediaCard document={document} key={"" + index} index={index} />
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      }
    </InfiniteScroll>

    </div>
  );
}
