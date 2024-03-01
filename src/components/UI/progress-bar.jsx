import React from "react";

const ProgressBar = ({color, percent}) => {
    return (
        <div style={{backgroundColor: "lightgray", height: "5px", width: "150px", borderRadius: "5px", overflow: "hidden"}} class="progress-bar">
            <div style={{height: "100%", width: `${percent}%`, backgroundColor: color}} class="progress"/>
        </div>
        // <input {...props}/>   
    )
};

export default ProgressBar;