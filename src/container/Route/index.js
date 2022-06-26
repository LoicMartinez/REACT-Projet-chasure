import {BrowserRouter, Route, Routes} from "react-router-dom";
import CollectionPage from "../CollectionPage";
import LoginPage from "../LoginPage";
import {useContext} from "react";
import userContext from "../../contexts/userContext";

export default function RoutePage() {
    const { user } = useContext(userContext);

    console.log(user.isConnected)

    return (
        <BrowserRouter>
            <Routes>
                {!user.isConnected &&
                    <Route path={"/login"} element={<LoginPage/>}/>
                }
                {user.isConnected &&
                    <>
                        <Route path={"/"} element={<CollectionPage/>}/>
                        <Route path={"/home_page"} element={<CollectionPage/>}/>
                    </>
                }
            </Routes>
        </BrowserRouter>

    )
}