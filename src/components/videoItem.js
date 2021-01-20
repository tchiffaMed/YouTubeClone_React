import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
    return(
        <Grid item xs={12}>
            <div style={{ display: 'flex', alignItems: 'flex-start', cursor:'pointer', }} onClick={() => onVideoSelect(video)}>
                    <img style={{ marginRight:'0px',width:'20vh'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                    <Typography style={{ fontSize:'15px',width:'50vw', marginLeft:'10px'}} ><p>{video.snippet.title}</p> </Typography>
            </div>
        </Grid>
    )
}

export default VideoItem;