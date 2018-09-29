import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    root: {
      flexGrow: 1,
    },
  };
const InfoBar = ({classes}) => {
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="button" color="inherit">
                        POST INFO
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default withStyles(styles)(InfoBar);