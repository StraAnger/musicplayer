import React from "react";

export default function Song(props) {
    return(
        <div>            
                {props.song.songNumber} {props.song.songTitle} {props.song.songDuration} {props.song.songRating}
        </div>
    );
}