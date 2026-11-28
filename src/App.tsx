import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <TwoDice />
            <hr />
            <ChangeType />
        </div>
    );
}
export default App;
