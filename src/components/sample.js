import { useContext, memo } from "react";
import { AppContext } from "../context";
import { actionTypes } from "../constants/types";

const SayHello = memo(function (props) {
    const { state, dispatch } = useContext(AppContext);
    return (
        <div>
            <div>Did I say Hello ? </div>
            <div>{state.saidHello.toString()}</div>
            <button
                onClick={() => {
                    dispatch({
                        type: actionTypes.SAY_HELLO,
                        data: {
                            saidHello: !state.saidHello,
                        },
                    });
                }}
            >
                Say Hello
            </button>
        </div>
    );
});

export default SayHello;
