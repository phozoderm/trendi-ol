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
import {OrderPage} from "./pages/OrderPage";
import {DiscountCouponsPage} from "./pages/DiscountCouponsPage";
import {ElitePage} from "./pages/ElitePage";
import {FavoritePage} from "./pages/FavoritePage";
import {CollectionPage} from "./pages/CollectionPage";
import {ProductDetailPage} from "./pages/ProductDetailPage";

const emailFromLocalStorage = localStorage.getItem('email')
const jwt = localStorage.getItem('jwt')
const isEmailLoggedIn = emailFromLocalStorage != null
export const UserContext = React.createContext({email: '', jwt: ''})
const userInfo = {email: emailFromLocalStorage, jwt}

export function App() {
    return (
        <UserContext.Provider value={userInfo}>
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
                                    <Route path='kullaniciBilgileri' element={<UserInfoPage/>}/>
                                    <Route path='adresBilgileri' element={<UserAddressInfo/>}/>
                                    <Route path='siparislerim' element={<OrderPage/>}/>
                                    <Route path='indirimKuponlari' element={<DiscountCouponsPage/>}/>
                                    <Route path='elite' element={<ElitePage/>}/>
                                </Route>
                        }
                        {
                            !isEmailLoggedIn ? null :
                                <Route path='favoriler' element={<FavoritePage/>}/>
                        }
                        {
                            !isEmailLoggedIn ? null :
                                <Route path='koleksiyonlar' element={<CollectionPage/>}/>
                        }
                        <Route path='home' element={<HomePage/>}/>
                        <Route path='product-list' element={<ProductListPage/>}/>
                        <Route path='product-detail' element={<ProductDetailPage/>}/>
                        <Route path='*' element={<Navigate to='/home' replace/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

