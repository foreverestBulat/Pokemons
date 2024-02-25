import React from "react";

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input {...props}/>   
    )
});

export default MyInput;