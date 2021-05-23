import { useState } from 'react'
import { Page1_Child } from './Page1_Child'

export const Page1 = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const [open, setOpen] = useState(false)

    /* Counter ------------------------------------------------------------------ */
    const onCounter = () => {
        setCount(count + 1)
    }
    /* form text ---------------------------------------------------------------- */
    const onTextChange = (e) => {
        setText(e.target.value)
    }
    /* Toggle ------------------------------------------------------------------- */
    const onClickToggle = () => {
        setOpen(!open)
    }

    return (
        <div>
            <h1>Page1</h1>
            <h2>Get Child</h2>
            {/* eslint-disable-next-line */}
            <Page1_Child isOpen={open} />
            <button onClick={onClickToggle}> isOpen </button>
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
