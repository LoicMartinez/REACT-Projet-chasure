import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material";
import Api from "./api/api.js"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./container/home_page";
import LoginView from "./container/LoginView";
import MenuAppBar from "./components/navBar/navBar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuAppBar/>
        <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/login"} element={<LoginView/>}/>
            <Route path={"/home_page"} element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
