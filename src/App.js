import './App.css';
import MenuAppBar from "./components/NavBar";
import userContext from "./contexts/userContext";
import {useState} from "react";
import User from "./models/userModel";
import {getLocalStorage} from "./lib/localStorage";
import RoutePage from "./container/Route";


function App() {
    const [user, setUser] = useState(new User(JSON.parse(getLocalStorage('user'))));

    return (
     <div className="App">
       <header className="App-header">
       <userContext.Provider value={{ user, setUser }}>
        <MenuAppBar/>
        <RoutePage/>
       </userContext.Provider>
       </header>
     </div>
   );
}

export default App;
