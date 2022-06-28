import './App.css';
import MenuAppBar from "./components/NavBar";
import userContext from "./contexts/userContext";
import {useState} from "react";
import RoutePage from "./container/Route";
import {sesseionStatus} from "./lib/jwt";

function App() {
    const [user, setUser] = useState(sesseionStatus());

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
