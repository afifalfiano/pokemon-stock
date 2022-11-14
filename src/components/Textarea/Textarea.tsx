import { forwardRef } from "react";

const Textarea: React.FC<any> = forwardRef((props, ref) => {
    return <textarea ref={ref} {...props}></textarea>
});

export default Textarea;