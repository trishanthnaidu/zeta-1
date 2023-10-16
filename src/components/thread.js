import React, { useContext, useRef } from "react";
import { AppContext } from "../context";
import { actionTypes } from "../constants/types";

export const Thread = function ({ message, id }) {
    const pRef = useRef();
    const { state, dispatch } = useContext(AppContext);
    const onReply = function () {
        const message = pRef.current.textContent;
        const id = pRef.current.id;
        debugger;
        dispatch({
            type: actionTypes.ADD_NESTED_THREAD,
            data: { message, id },
        });
    };
    return (
        <div>
            <p ref={pRef} id={id}>
                {message}
            </p>
            <button onClick={onReply}>Reply</button>
        </div>
    );
};
