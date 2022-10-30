import "./App.css";
import {Input, StyledButton, StyledInput, StyledInput2, StyledInput3, StyledInput4} from "./components/Input";
import theme from './themes/index'
import {ThemeProvider} from "@emotion/react";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <h2>Basic Test of Design system...</h2>
                <div className="column">
                    <Input placeholder={"enter your name..."}/>
                    <StyledInput placeholder={"enter your name in styled input..."}/>
                    <StyledInput2 placeholder={"enter your name in styled input 2 ..."}/>
                    <StyledInput3 placeholder={"enter your name in styled input 3 ..."}/>
                    <StyledInput4 placeholder={"enter your name in styled input 4 ..."}/>
                    <StyledButton bgcolor={'yellow'} onClick={() => alert('clicked')}>Click me</StyledButton>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
