import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Category from './Routes/Category'
import Home from './Routes/Home'
import Product from './Routes/Product'

import "./App.sass"
import Checkout from './Routes/Checkout'

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c/*" element={<Category />} />
            <Route path="/p/*" element={<Product />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </Router>
)

const root = createRoot(document.getElementById('app'))
root.render(<App />)