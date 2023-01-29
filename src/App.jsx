import React from 'react'
import './App.css'
import './components/ModuleCss.module.scss'
// import { Page } from './pages/Page'
// import { UserProvider } from './providers/UserProvider'
import { Component } from './reduxComp/Component'

function App() {
    return (
        <div className='App'>
            <Component />
            {/* <UserProvider>
                <header className='App-header'>
                    <Page />
                </header>
            </UserProvider> */}
        </div>
    )
}

export default App
