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
import Divider from '@material-ui/core/Divider';


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
    marginTop:15,
  },
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();
  const [chargin,setChargin] = React.useState(true);
  const [theFirst,setTheFirst]=React.useState(true);
  const [hasmore,setHasmore]=React.useState(true);
  const [state, setState] = React.useState({
      chargin:false,
      statu: "admin",
      data:{
        today:[],
        yesteday:[],
        thisWeek:[],
        lastWeek:[],
        thisMonth:[],
        lastMonth:[],
      }
  });
  useEffect(
    () => {
      if(theFirst){
      setTheFirst(false);
      server
        . getRecentData()
        .then((val)=>{
          setHasmore(false);
          setState(val)
        })
        .catch(alert);
      }
    },
    { data: [] }
  );
  const deleteData =(oldData)=>{
    console.log("sa marche")
    setState((prevState) => {
      const data = prevState.data;
      if(state.data.today.indexOf(oldData)!==-1){
        data.today.splice(data.today.indexOf(oldData), 1);
      }
      if(state.data.yesteday.indexOf(oldData)!==-1){
        data.yesteday.splice(data.yesteday.indexOf(oldData), 1);
      }
      if(state.data.thisWeek.indexOf(oldData)!==-1){
        data.thisWeek.splice(data.thisWeek.indexOf(oldData), 1);
      }
      if(state.data.lastWeek.indexOf(oldData)!==-1){
        data.lastWeek.splice(data.lastWeek.indexOf(oldData), 1);
      }
      if(state.data.thisMonth.indexOf(oldData)!==-1){
        data.thisMonth.splice(data.thisMonth.indexOf(oldData), 1);
      }
      if(state.data.thisMonth.indexOf(oldData)!==-1){
        data.lastMonth.splice(data.lastMonth.indexOf(oldData), 1);
      }
      return { ...prevState, data };
    });
  }

  return (
   
    <InfiniteScroll
   
      dataLength={state.data.today.length+state.data.yesteday.length+state.data.thisWeek.length+state.data.lastWeek.length+state.data.thisMonth.length+state.data.lastMonth.length} //This is important field to render the next data
      next={()=>{
        setChargin(true);
        console.log('sa marche');
        if(state.chargin===true){
          server
          . getRecentData()
          .then((dato)=>{
            setState(dato);
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
        <div>
        {state.data.today.length>0 &&<div className={classes.roote}>
        <p style={{ textAlign: "center" }}>
          <b>Today</b>
        </p>
        <Grid container spacing={0} justify="center">
          {state.data.today.map((document, index) => (
            <div key={index}>
              <Grid xl="auto">
              <ImgMediaCard document={document} key={"" + index} index={index} delete ={deleteData} editCompte={props.editCompte}/>
              </Grid>
            </div>
          ))}
        </Grid>
      </div>
          }
          {state.data.yesteday.length>0 &&<div className={classes.roote}>
          <Divider />
          <p style={{ textAlign: "center" }}>
          <b>Yesteday</b>
        </p>
        <Grid container spacing={0} justify="center">
          {state.data.yesteday.map((document, index) => (
            <div key={index}>
              <Grid xl="auto">
              <ImgMediaCard document={document} key={"" + index} index={index} delete ={deleteData} editCompte={props.editCompte}/>
              </Grid>
            </div>
          ))}
        </Grid>
      </div>
          }
          {state.data.thisWeek.length>0 &&<div className={classes.roote}>
          <Divider />
          <p style={{ textAlign: "center" }}>
          <b>this week!</b>
        </p>
        <Grid container spacing={0} justify="center">
          {state.data.thisWeek.map((document, index) => (
            <div key={index}>
              <Grid xl="auto">
              <ImgMediaCard document={document} key={"" + index} index={index} delete ={deleteData} editCompte={props.editCompte}/>
              </Grid>
            </div>
          ))}
        </Grid>
      </div>
          }
          {state.data.lastWeek.length>0 &&<div className={classes.roote}>
          <Divider />
          <p style={{ textAlign: "center" }}>
          <b>Last week!</b>
        </p>
        <Grid container spacing={0} justify="center">
          {state.data.lastWeek.map((document, index) => (
            <div key={index}>
              <Grid xl="auto">
              <ImgMediaCard document={document} key={"" + index} index={index} delete ={deleteData} editCompte={props.editCompte}/>
              </Grid>
            </div>
          ))}
        </Grid>
      </div>
          }
          {state.data.thisMonth.length>0 &&<div className={classes.roote}>
          <Divider />
          <p style={{ textAlign: "center" }}>
          <b>This month</b>
        </p>
          <Grid container spacing={0} justify="center">
            {state.data.thisMonth.map((document, index) => (
              <div key={index}>
                <Grid xl="auto">
                <ImgMediaCard document={document} key={"" + index} index={index} delete ={deleteData} editCompte={props.editCompte}/>
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
            }
            {state.data.lastMonth.length>0 &&<div className={classes.roote}>
            <Divider />
            <p style={{ textAlign: "center" }}>
          <b>Last month</b>
        </p>
            <Grid container spacing={0} justify="center">
              {state.data.lastMonth.map((document, index) => (
                <div key={index}>
                  <Grid xl="auto">
                  <ImgMediaCard document={document} key={"" + index} index={index} delete ={deleteData} editCompte={props.editCompte}/>
                  </Grid>
                </div>
              ))}
            </Grid>
          </div>
              }
      </div>
      }
    </InfiniteScroll>
   
  );
}
