import React from 'react';
import Grid from '@material-ui/core/Grid';
import CommentItem from './comment-item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 200,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  });
const CommentsList = ({comments,classes}) => {

    return (
        <Grid container spacing={8}>
            <Grid item xs={12}><Typography variant="button">Comments: </Typography></Grid>
            <Grid item xs={12}>
                <List className={classes.root}>
                {
                    comments.map((comment,index) => (
                        <ListItem key={index}>
                            <CommentItem commentData={comment} index={index} />
                        </ListItem>
                    ))
                }
                </List>
            </Grid>
            
            
        </Grid>
    )
}

export default withStyles(styles)(CommentsList);
