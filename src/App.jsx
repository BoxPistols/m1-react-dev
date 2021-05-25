import React from 'react'
import './App.css'
import './components/ModuleCss.module.scss'
import { Page } from './pages/Page'

function App () {
    return (
        <div className='App'>
            <header className='App-header'>
                <Page />
            </header>
        </div>
    )
}

export default App
