import { useState } from 'react'
import Page1_Child from './Page1_Child'

export const Page1 = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)

    const onCounter = () => {
        setCount(count + 1)
    }
    const onTextChange = (e) => {
        setText(e.target.value)
    }
    const onClickToggle = () => {
        setOpen(!open)
    }

    return (
        <div>
            <h1>Page1</h1>
            <h2>Get Child</h2>
            <button onClick={onClickToggle}>onClickToggle</button>
            <Page1_Child isOpen={open} />
            <hr />
            <h2>useState</h2>
            <h3>{count}</h3>
            <div>
                <button onClick={onCounter}>CountUp</button>
            </div>
            <div>
                <p>{text}</p>
                <input onChange={onTextChange} type='text' placeholder='input...' />
            </div>
        </div>
    )
}
