import { useReducer, createContext } from "react";
import { initialState } from "../state";
import { actionTypes } from "../constants/types";
import {
    createIdForNewThread,
    createThreadAllocation,
    thread,
} from "../constants";

export const AppContext = createContext(initialState);

const AppContextProvider = function (props) {
    const [state, dispatch] = useReducer(function (state, newState) {
        const { type, data } = newState;
        switch (type) {
            // Placeholder case
            case actionTypes.ADD_NEW_THREAD: {
                const newThread = { ...thread };
                newThread.message = data.message;
                newThread.id = state.threads.length.toString();

                return {
                    ...state,
                    threads: [...state.threads, newThread],
                };
            }

            case actionTypes.ADD_NESTED_THREAD: {
                const newThread = { ...thread };
                newThread.message = data.message;
                newThread.id = createIdForNewThread(state.threads, data.id);

                const updatedThreads = createThreadAllocation(
                    state,
                    newThread,
                    newThread.id
                );

                return {
                    ...state,
                    threads: updatedThreads,
                };
            }
            default: {
                return { ...state };
            }
        }
    }, initialState);
    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
