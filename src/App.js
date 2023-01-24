import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import {LoginPage} from "./pages/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';


export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<Navigate to='/login' replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

