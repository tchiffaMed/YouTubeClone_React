import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './videoItem';

const VideoList = ({videos, onVideoSelect}) => {
 const ListOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return (
        <Grid container spacing={3}>
         {ListOfVideos}
        </Grid>
    )
} 

export default VideoList; 