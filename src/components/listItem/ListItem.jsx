import React, { useState } from "react";
import "./listItem.scss";
import {
    Add,
    PlayArrow,
    ThumbDownAltOutlined,
    ThumbUpAltOutlined,
} from "@material-ui/icons";

const ListItem = ({ index }) => {

    const [isHovered, setIsHovered] = useState(false);
    const trailer ="https://media.w3.org/2010/05/sintel/trailer_hd.mp4";

    return (
        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://occ-0-64-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSEi0cmropU2tezL-SnNeXOcVJ9EPhoKC8RzQAJc9Sq-M7OI6yhnkdZI9aCq7KXgQAF8kB4rsPLugN6Jn2qKCtX7_nbu.jpg?r=224"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+17</span>
                            <span>2021</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
                            dolorum recusandae sequi sunt quidem excepturi vero, ratione
                            reprehenderit deleniti cumque eius dicta perspiciatis vitae
                            laboriosam. Tenetur necessitatibus assumenda laudantium consequatur.
                        </div>
                        <div className="genre">Comedy</div>
                    </div>
                </>
            )}

        </div>
    );
};

export default ListItem;
