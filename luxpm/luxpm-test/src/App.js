import './App.css';
import Splash from './screens/splash';
import {BrowserRouter} from "react-router-dom";
import Routes from "./screens/route";

function App() {
    return (
        <BrowserRouter>
            <div className="flexbox atcenter">
                <Routes/>
            </div>
        </BrowserRouter>
    );
}

export default App;
