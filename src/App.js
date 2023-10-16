import React from "react";
import styled from "styled-components";
import AppContextProvider from "./context";
import SayHello from "./components/sample";
import { Threads } from "./components/threads";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

function App() {
    return (
        <AppContextProvider>
            <Container>
                {/* App Components goes here */}
                <Threads />
            </Container>
        </AppContextProvider>
    );
}

export default App;
