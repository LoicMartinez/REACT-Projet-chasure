import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material";
import Api from "./api/api.js"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./container/home_page";
import LoginView from "./container/LoginView";


function App() {
    const background = {

    }

    const buttonStyles = {
        fontsize: 20,
        fontWeight: 700,
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'yellow'
        }
    };
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path={"/login"} element={<LoginView/>}/>
            <Route path={"/"} element={
                <>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </>
            }/>
            <Route path={"/home_page"} element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
        <Button
            sx={buttonStyles}
            onClick={() => Api.login("max@adok.info", "max@adok.info")}
        >
            Cliques !
        </Button>
        <Button href={"/"}> / </Button>
        <Button href={"/home_page"}> /home_page </Button>
        <Button href={"/test"}> /test </Button>
      </header>
    </div>
  );
}

export default App;
