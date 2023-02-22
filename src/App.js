import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import './App.css';
import {XPage} from "./pages/XPage";
import {LoginPage} from "./pages/LoginPage";
import {SignUpPage} from "./pages/SignUpPage";
import {HomePage} from "./pages/HomePage";

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
                    <Route path='home' element={<HomePage/>}/>
                    <Route path='*' element={<Navigate to='/home' replace/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

