import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import { fetchSmurfs } from '../state/actions/smurfActions';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SmurfList = (props) => {
  const classes = useStyles();

    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    // display: "flex", justifyContent: "space-around", 

  return (
      <div style={{flexGrow: 1, marginTop: "6%"}}>
          <Grid direction="row" justify="space-around" align="center" container spacing={3}>
          {props.smurfsOnProps && props.smurfsOnProps.map(item => {
              return(
                <Grid item xs key={item.id}>
                  <div>
                      
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Smurf
        </Typography>
        <Typography variant="h5" component="h2">
          {item.name}
        </Typography>
        <Typography variant="body2" component="p">
           Age: {item.age}
          <br />
          Height: {item.height}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    
    </div>
    </Grid>
    )
})}
</Grid>
    </div>
  );
}

const mapStateToProps = state => {
    console.log("SmurfList state", state)
    return{
        smurfsOnProps: state.smurfReducer.smurf,
        isFecthing: state.smurfReducer.isFetching,
        errorOnProps: state.smurfReducer.error,
    }
}


export default connect(mapStateToProps, {fetchSmurfs})(SmurfList)
