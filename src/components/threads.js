import React, { useContext, useReducer, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../context";
import { actionTypes } from "../constants/types";
import { Thread } from "./thread";

const Container = styled.div`
    width: 400px;
    height: 600px;
    background: #eee;
`;

const ThreadContainer = styled.div`
    margin-top: 20px;
`;

export const Threads = function () {
    const inputRef = useRef();
    const { state, dispatch } = useContext(AppContext);
    const DisplayThreads = function () {
        // algo to add threads
        const allThreads = state.threads;
        debugger;
        return allThreads.map(function (thread) {
            return <Thread message={thread.message} id={thread.id} />;
        });
    };
    const addThread = function () {
        const message = inputRef.current?.value;

        // adding a new thread
        dispatch({
            type: actionTypes.ADD_NEW_THREAD,
            data: { message },
        });
    };
    return (
        <Container>
            <input type="text" ref={inputRef} />
            <button onClick={addThread}>Add</button>
            <ThreadContainer>
                <DisplayThreads />
            </ThreadContainer>
        </Container>
    );
};
