import React from "react";
import './App.css';
import Slide from "./components/Slide";
import Slides from "./components/Slides";

function App() {
    return (
        <div className="App">
            <Slides>
                <Slide page={1}/>
            </Slides>
        </div>
    );
}

export default App;
