import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'

import "./App.sass"
import Home from './Routes/Home'

const App = () => (
    <Router>
        <Layout>
            <Home />
        </Layout>
    </Router>
)

const root = createRoot(document.getElementById('app'))
root.render(<App />)