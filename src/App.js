import React from 'react';

import { Grid } from '@material-ui/core';

import youtube from './api/youtube';

import { VideoDetails, SearchBar, VideoList } from './components';


class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('Let&#39;s Build a YouTube Clone with REACT JS for Beginners')
    }

    onVideoSelect = (videos) =>{
        this.setState({ selectedVideo: videos })
    }
    handleSubmit = async (SearchTerm) => {

        const response = await youtube.get('search', { 
              params: { 
                part: 'snippet',
                maxResult: 5,
                key: 'AIzaSyDyWqavZwHy2WBkvTbdtcK9-RIs3N1ai0Y',
                q: SearchTerm
            
            }});


        console.log(response);
        console.log(response.data.items);
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
    }

    render() {
 
        return(
            <Grid container justify="center" spacing={10} style={{padding:'20px'}} >
                <Grid item xs={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={12}>  
                            <VideoDetails video={this.state.selectedVideo} />
                        </Grid>
                        <Grid item xs={12}>
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;