import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import "./App.sass"
import Category from './Routes/Category'
import Home from './Routes/Home'

const App = () => (
    <Router>
        {/* <Home /> */}
        <Category />
    </Router>
)

const root = createRoot(document.getElementById('app'))
root.render(<App />)