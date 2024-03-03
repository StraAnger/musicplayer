import React from "react";
import {musicData} from "./musicData";
import "./Songs.css";
import Song from "./Song";

export default function Songs(props) {

    return (
        <div className="song-container">
            {
                musicData.map(
                    (song, index) => (
                        <div key={index} className="song">
                            <Song song={song} />
                        </div>
                    )
                )
            }
        </div>
    );
}