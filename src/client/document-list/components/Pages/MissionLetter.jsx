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


import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import server from '../../../utils/server';


import ImgMediaCard from '../ImgMediaCard';
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
        .getSpecific(state.indexfin,"Lettre de mission","")
        .then((val)=>{
          if(val.data.length<20){
            setHasmore(false);
          }
          console.log(val.data.length);
          setState(val)
        })
        .catch(alert);
      }
    },
    { data: [] }
  );

  const deleteData =(oldData)=>{
    console.log("sa marche")
    console.log(state.data.indexOf(oldData));
    setState((prevState) => {
      const data = [...prevState.data];
      data.splice(data.indexOf(oldData), 1);
      return { ...prevState, data };
    });
  }

  return (
   
    <InfiniteScroll
   
      dataLength={state.data.length} //This is important field to render the next data
      next={()=>{
        setChargin(true);
        console.log('sa marche');
        if(state.chargin===true){
          server
          .getSpecific(state.indexfin,"Lettre de mission","")
          .then((dato)=>{
            if(dato.data.length<20){
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
                <ImgMediaCard document={document} key={"" + index} index={index} delete ={deleteData}/>
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      }
    </InfiniteScroll>
   
  );
}
