import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import TokenContext from '../../contexts/TokenContext.js'
import CadastroPage from '../Cadastro/'
import LoginPage from '../Login/'
import HomePage from '../Home/'
import ShoppingCart from '../ShoppingCart/index.jsx';
import Category from '../Category/index.jsx';

export default function App() {
    const [token, setToken] = useState('');

    return (
        <TokenContext.Provider value={{ token, setToken}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<CadastroPage />} />
                    <Route path="/user/shopping-cart" element={<ShoppingCart />} />
                    <Route path="/category/:idCategory" element={<Category />} />
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    )
}