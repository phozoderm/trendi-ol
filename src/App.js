import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import './App.css';
import {XPage} from "./pages/XPage";
import {LoginPage} from "./pages/LoginPage";
import {SignUpPage} from "./pages/SignUpPage";
import {HomePage} from "./pages/HomePage";
import {ProductListPage} from "./pages/ProductListPage";
import {MyAccountPage} from "./pages/MyAccountPage";
import {UserInfoPage} from "./pages/UserInfoPage";
import {UserAddressInfo} from "./pages/UserAddressInfo";

const emailFromLocalStorage = localStorage.getItem('email')
const isEmailLoggedIn = emailFromLocalStorage != null

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<XPage/>}>
                    {
                        isEmailLoggedIn ? null :
                            <Route path='giris' element={<LoginPage/>}/>
                    }
                    {
                        isEmailLoggedIn ? null :
                            <Route path='uyelik' element={<SignUpPage/>}/>
                    }
                    {
                        !isEmailLoggedIn ? null :
                            <Route path='hesabim' element={<MyAccountPage/>}>
                                <Route path='kullaniciBilgileri' element={<UserInfoPage/>} />
                                <Route path='adresBilgileri' element={<UserAddressInfo/>}/>
                            </Route>
                    }
                    <Route path='home' element={<HomePage/>}/>
                    <Route path='product-list' element={<ProductListPage/>}/>
                    <Route path='*' element={<Navigate to='/home' replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

