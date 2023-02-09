import React from "react";
import {DefaultPlayer as Video} from 'react-html5video';
import introVideo from './video/React video player _ Custom video player in react js.mp4';
import 'react-html5video/dist/styles.css';

const Reactvideo = () => {
    return(
        <Video autoPlay loop>
            <source src={introVideo} type="video/mp4" />
        </Video>
    );
}

export default Reactvideo;