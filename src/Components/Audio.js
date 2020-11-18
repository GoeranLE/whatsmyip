import React from "react";
import janet from "../sound/janet.mp3";

const AudioPlayer = () => {
    
    return (


<audio id="audio"
    controls autoplay
    src={janet}>
        Your browser does not support the
        <code>audio</code> element.
</audio>

    );
};
    export default AudioPlayer;  