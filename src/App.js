import './App.css'
import ModuleCss from './components/ModuleCss'
import './components/ModuleCss.module.scss'
import { StyledComponents } from './components/StyledComponents'
import { StyledJsx } from './components/StyledJsx'
import { Emotion } from './components/Emotion'

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <ModuleCss />
                <StyledJsx />
                <StyledComponents />
                <Emotion />
            </header>
        </div>
    )
}

export default App
