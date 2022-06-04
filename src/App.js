import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./container/home_page";
import LoginView from "./container/LoginView";
import MenuAppBar from "./components/navBar/navBar";
import userContext from "./contexts/userContext";
import {useContext, useEffect, useState} from "react";


function App() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        console.log(authenticated)
    }, [authenticated])

    return (
    <div className="App">
      <header className="App-header">
          <userContext.Provider value={{ authenticated, setAuthenticated }}>
        <MenuAppBar/>
        <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<HomePage/>}/>
              <Route path={"/login"} element={<LoginView/>}/>
            <Route path={"/home_page"} element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
          </userContext.Provider>
      </header>
    </div>
  );
}

export default App;
