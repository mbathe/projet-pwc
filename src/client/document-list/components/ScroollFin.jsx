import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import server from '../../utils/server';
import SearchAppBar from './SearchAppBar';
import '../styles.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Divider from '@material-ui/core/Divider';
import ImgMediaCard from './ImgMediaCard';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from '@material-ui/core/Grid';
import CircularIndeterminate from './CircularIndeterminate';
import { withStyles } from '@material-ui/styles';

const styles  = heme => ({
    root: {
      display: 'flex',
      flexWrap: 'nowrap',
      marginLeft: 70,
      direction: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gridList: {
      width: '100%',
      height: '100%',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    roote: {
      flexGrow: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


 class ScroollFin extends Component {
   
    constructor() {
        super();
        this.state = {
            chargin: false,
            statu: 'admin',
            data: [],
        };
      }
      componentDidMount() {
      
            server
              .getDocuments()
              .then((data)=>{this.setState(data)})
              .catch(alert);   
      }
    render() {
        const { classes } = this.props;
        return (
            <InfiniteScroll
            pageStart={0}
            loadMore={() => {
              this.setState((state, props) => ({
                chargin: state.chargin,
                statu: state.statu,
                data: [...state.data,  state.data]
              }));
            }}
            hasMore={true}
            loader={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <CircularIndeterminate />
              </div>
            }
          >
            {
                <div className={classes.roote}>
                 <Grid container spacing={0} justify="center">
                  {this.state.data.map((tile, index) => (
                    <div key={index}>
                    <Grid item xl="auto" spacing={2} key={index}>
                      <ImgMediaCard img={tile.vewlink} />
                    </Grid>
                    </div>
                  ))}
                </Grid>
                </div>
            }
          </InfiniteScroll>
        )
    }
}

ScroollFin.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ScroollFin);