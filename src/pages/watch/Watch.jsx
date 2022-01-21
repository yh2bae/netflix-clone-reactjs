import { ArrowBackIosOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackIosOutlined />
                Home
            </div>
            <video className="video" autoPlay progress controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
        </div>
    );
};

export default Watch;
