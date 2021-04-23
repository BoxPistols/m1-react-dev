import './App.css'
import ModuleCss from './components/ModuleCss'
import './components/ModuleCss.module.scss'
import { StyledComponents } from './components/StyledComponents'
import { StyledJsx } from './components/StyledJsx'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <ModuleCss />
                <StyledJsx />
                <StyledComponents />
            </header>
        </div>
    )
}

export default App
