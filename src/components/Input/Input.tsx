import React, { forwardRef } from "react";


const Input: React.FC<any> = forwardRef((props, ref) => {
    return <input {...props} ref={ref}/>
})

export default Input;