import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import SearchField from './search-field';
import PostList from './post-list';
import { withStyles } from '@material-ui/core/styles';
import InfoBar from './info-bar';
import Typography from '@material-ui/core/Typography';
import DisplayInfo from './display-info';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 1200,
      margin: '0 auto'
    }
  });

class App extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            checkedPost: null
        }   
    }
    filterByContext = async str => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${str}`);
        const data = await response.json();
        this.setState({
            posts: [...data]
        })
    }
    
    getUserData = async id => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        return data;
    }
    getCommentsData = async id => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        const data = await response.json();
        return data;
    }
    getCheckedPostData = async ids => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ids}`);
        const data = await response.json();
        const { userId,id } = await data;
        const userData = await this.getUserData(userId);
        const commentsData = await this.getCommentsData(id);
        return { userData, commentsData}
    }
    setCheckedPostData = async id => {
        const data = await this.getCheckedPostData(id);
        console.log(data)
        this.setState({
            checkedPost: { ...data }
        })
    }
    resetState = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => {
            this.setState({
                posts: [...data],
                checkedPost: null
            })
        })
        .catch( err => console.log(err))
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(data => {
            this.setState({
                posts: [...data]
            })
        })
        .catch( err => console.log(err))
    }
    render(){
        const { posts,checkedPost } = this.state;
        const { classes } = this.props;
        return (
            <Grid className={classes.root} container spacing={24}>
                <Grid item xs={12}>
                    <SearchField 
                        filter={this.filterByContext} 
                        reset={this.resetState}
                    />
                </Grid>
                <Grid  container item xs={6}>
                    <Grid item xs={12}>
                        <Typography variant="display1">POSTS:</Typography>
                        <PostList list={ posts } checkFunc={this.setCheckedPostData} />
                    </Grid>
                </Grid>
                <Grid item container xs={6}>
                    <Grid item xs={12}>
                        <InfoBar/>
                    </Grid>
                    <Grid container item xs={12}>
                    {
                        checkedPost ? <DisplayInfo postData={checkedPost} /> : <div>NO CHECKED ITEM</div>
                    }
                    </Grid>
                </Grid>
            </Grid>      
        )
    }
}

export default withStyles(styles)(App);