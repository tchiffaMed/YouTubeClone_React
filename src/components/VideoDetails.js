import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const VideoDetails = ({ video }) => {

    if(!video) return <div>Loading ...</div>

   
    console.log(video.id.videoId);
    let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
     
    return (
        <React.Fragment >

            <Paper elevation={1} style={{ padding: '0%', height:'50vw' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="video Player" src={videoSrc} />
            </Paper>
            <Paper elevation={1} style={{ padding: '15px' }}>
                <Typography variant="h6">{video.snippet.title} - {video.snippet.channelTitle} </Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle} </Typography>
                <Typography variant="subtitle2">{video.snippet.description} </Typography>
            </Paper>
            
        </React.Fragment>
    )
}

export default VideoDetails

