import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

// import { Switch } from "@material-ui/core";

import Login from "./components/Login/Login/"
import SignUp from "./components/Login/SignUp/"



function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/signup" exact element={<SignUp />} />
                    <Route path="/login" exact element={<Login />} />
                    
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
