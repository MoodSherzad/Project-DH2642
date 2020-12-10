import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";


function FooterView(currentTrack) {

  return (  
    <div className="footer__play">
      <div className="footer__left">
        <img
          src= {currentTrack.album === undefined || currentTrack.album === null ? "https://i.ibb.co/rsCJb8L/popify-Logo.png" : currentTrack.album.images[0].url }
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
        <h4>{currentTrack.name}</h4>
        </div>
      </div>
      <div className="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default FooterView;