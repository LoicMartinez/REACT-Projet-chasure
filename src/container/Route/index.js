import {BrowserRouter, Route, Routes} from "react-router-dom";
import CollectionPage from "../CollectionPage";
import LoginPage from "../LoginPage";
import {useContext} from "react";
import userContext from "../../contexts/userContext";
import ProductDetail from "../ProductDetail";

export default function RoutePage() {
    const { user } = useContext(userContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/"} element={<CollectionPage user={user}/>}/>
                <Route path={"/home_page"} element={<CollectionPage/>}/>
                <Route path={"product-detail/:id"} element={<ProductDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}