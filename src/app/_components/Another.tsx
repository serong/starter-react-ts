import * as React from "react";
import {IAnotherProps} from "../_types/AnotherProps";

const Another = (props: IAnotherProps) => {
    return (
        <div>
            <p>{props.message}</p>
        </div>
    );
};

export default Another;
