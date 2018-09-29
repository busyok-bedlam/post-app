import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const UserInfo = ({ userData }) => {
    const { email, name, phone, username, website } = userData;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="button">User Info</Typography>
            </Grid>
            <Grid item xs={12}>
                {email}
            </Grid>
            <Grid item xs={12}>
                {name}
            </Grid>
            <Grid item xs={12}>
                {phone}
            </Grid>
            <Grid item xs={12}>
                {username}
            </Grid>
            <Grid item xs={12}>
                {website}
            </Grid>
        </Grid>
    )
}
export default UserInfo;