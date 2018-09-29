import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      cursor: 'pointer'
    },
  });

const CommentItem = ({commentData,index,classes}) => {
    const { body,email,name } = commentData;
    return (
        <Grid container item xs={12} spacing={8}>
            <Grid item xs={1}>
                <Paper className={classes.paper}>{index+1}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>email: {email}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>name: {name}</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>content: {body}</Paper>
            </Grid>
            
        </Grid>
    )
}

export default withStyles(styles)(CommentItem);