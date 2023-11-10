import React from "react";

const Title = (props) => {
    return (
        <div className="section-title">
            <h2>{props.part1} <span>{props.part2}</span></h2>
        </div>
    );
};

export default Title;