import "./App.css";
import {ThemeProvider} from "react-ui";
import {
    Form,
    Input,
    StyledButton,
    StyledInput,
    StyledInput2,
    StyledInput3,
    // StyledInput4,
    StyledInput5
} from "./components/Input";
import theme from './themes/index'
import StyledInputComponent from "./components/Input/StyleInput";
import Button from "./components/Button";

function App() {
    return (
        <ThemeProvider tokens={theme}>
            <div className="App">
                <h2>Basic Test of Design system...</h2>
                <div className="column">
                    <Input placeholder={"enter your name..."}/>
                    <StyledInput placeholder={"enter your name in styled input..."}/>
                    <StyledInput2 placeholder={"enter your name in styled input 2 ..."}/>
                    <StyledInput3 placeholder={"enter your name in styled input 3 ..."}/>
                    {/*<StyledInput4 placeholder={"enter your name in styled input 4 ..."}/>*/}
                    <StyledInput5 placeholder={"enter your name in styled input 5 ..."}/>
                </div>
                <StyledButton bgcolor={'yellow'} onClick={() => alert('clicked')}>Click me</StyledButton>

                <Form>
                    <label htmlFor='username'>username</label>
                    <StyledInput5 placeholder={"enter your name in styled input 5 ..."}/>
                </Form>

                <div className="column">
                    <StyledInputComponent color='red' placeholder='This is new styled component...'/>
                    <StyledInputComponent color='green' placeholder='This is new styled component...'/>
                    <Button>click me</Button>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
