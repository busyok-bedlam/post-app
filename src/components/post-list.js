import React from 'react';
import PostListItem from './post-list-item';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 600,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 450,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  });

const PostList = ({ list, classes, checkFunc }) => {

    return (
        <List className={classes.root}>
            {
                list.map( (item,index) => (
                    <ListItem key={index}>
                        <PostListItem post={item} checkFunc={checkFunc}  />
                    </ListItem>
                ))
            }
        </List>
    )
}

export default withStyles(styles)(PostList);