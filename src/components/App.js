import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'

import "./App.sass"

const App = () => (
    <Router>
        <Layout></Layout>
    </Router>
)

const root = createRoot(document.getElementById('app'))
root.render(<App />)