import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import TokenContext from '../../contexts/TokenContext.js'
import CadastroPage from '../Cadastro/'
import LoginPage from '../Login/'
import HomePage from '../Home/'

export default function App() {
    const [token, setToken] = useState('')

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<CadastroPage />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}