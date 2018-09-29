import React from 'react';
import Grid from '@material-ui/core/Grid';
import CommentList from './comments-list';
import UserInfo from './user-info';

const DisplayInfo = ({postData}) => {
    const { userData, commentsData } = postData;
    return (
        <Grid container item>
            <UserInfo userData={userData}/>
            <CommentList comments={commentsData} commentsData/>
        </Grid>
    )
}

export default DisplayInfo;