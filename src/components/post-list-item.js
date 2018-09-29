import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
      maxWidth: '800px'
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      cursor: 'pointer'
    },
  });

const PostListItem = ({ post, classes, checkFunc }) => {
    const { userId, id, title, body } = post;
    const clickHandler = e => {
        e.preventDefault();
        checkFunc(id);
    }
    return (
        <div className={classes.root} onClick={clickHandler}>
            <Grid container>
                <Grid item xs={1}>
                    <Paper className={classes.paper}>{id}</Paper>
                </Grid>
                <Grid item xs={11}>
                    <Paper className={classes.paper}>{title}</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>{body}</Paper>
                </Grid>
            </Grid>
        </div>
        
    )
}
export default withStyles(styles)(PostListItem)