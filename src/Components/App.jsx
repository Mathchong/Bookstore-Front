import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import TokenContext from './../contexts/TokenContext.js'
import CadastroPage from './CadastroPage.jsx'
import LoginPage from './LoginPage.jsx'
import HomePage from './HomePage.jsx'

export default function App() {
    const [token, setToken] = useState('')

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<CadastroPage/>} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}