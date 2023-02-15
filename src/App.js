import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import './App.css';
import {XPage} from "./pages/XPage";
import {LoginPage} from "./pages/LoginPage";
import {SignUpPage} from "./pages/SignUpPage";


export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<XPage/>}>
                    <Route path='giris' element={<LoginPage/>}/>
                    <Route path='uyelik' element={<SignUpPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

