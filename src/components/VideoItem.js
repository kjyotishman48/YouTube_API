import React from "react";

import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <Grid item xs={12}>
            <Paper style={{display:'flex', alignItems:'center', cursor:'pointer'}} onClick={()=>onVideoSelect(video)}>
                <img style={{margin: 'auto'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url}/>
            </Paper>
            <Paper style={{display:'flex', alignItems:'center', cursor:'pointer'}} onClick={()=>onVideoSelect(video)}>
            <Typography varient="subtitle1" style={{margin: 'auto'}}><b>{video.snippet.title}</b></Typography>
            </Paper>
            
        </Grid>
    )
}

export default VideoItem;