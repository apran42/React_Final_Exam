import React, {useContext} from "react";
import './App.css';
import Header from "./Header";
import {AuthContext, AuthProvider} from "./AuthContext";
import Login from "./Login";
import Show_category from "./Show_category";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import CartProvider from "./CartContext";
import Cart from "./Cart";
import Books from "./Books";
import Books_Detail from "./Books_Detail";
import Fresh from "./Fresh";
import Fresh_Detail from "./Fresh_Detail";
import Clothes from "./Clothes";
import Clothes_Detail from "./Clothes_Detail";
import Food from "./Food";
import Food_Detail from "./Food_Detail";
import Electronics from "./Electronics";
import Electronics_Detail from "./Electronics_Detail";
import Lifestyle from "./Lifestyle";
import Lifestyle_Detail from "./Lifestyle_Detail";
const App = () => {

    const authContext = useContext(AuthContext);

    return (
        <AuthProvider>
            <CartProvider>
                <div className="header-container">
                    <Header/>
                </div>
                <Show_category/>
                <Routes>
                    <Route path={"/"} element={
                        <div className={"home_banner"}>
                            <Home/>
                        </div>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/cart"} element={<Cart/>}/>
                    <Route path={"/books"} element={<Books/>}/>
                    <Route path={"/books/*"} element={<Books_Detail/>}/>
                    <Route path={"/fresh"} element={<Fresh/>}/>
                    <Route path={"/fresh/*"} element={<Fresh_Detail/>}/>
                    <Route path={"/clothes"} element={<Clothes/>}/>
                    <Route path={"/clothes/*"} element={<Clothes_Detail/>}/>
                    <Route path={"/food"} element={<Food/>}/>
                    <Route path={"/food/*"} element={<Food_Detail/>}/>
                    <Route path={"/electronics"} element={<Electronics/>}/>
                    <Route path={"/electronics/*"} element={<Electronics_Detail/>}/>
                    <Route path={"/lifestyle"} element={<Lifestyle/>}/>
                    <Route path={"/lifestyle/*"} element={<Lifestyle_Detail/>}/>
                </Routes>
            </CartProvider>
        </AuthProvider>
    );
};

export default App;