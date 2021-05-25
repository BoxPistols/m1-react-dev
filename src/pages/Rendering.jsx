import React from 'react'
import { useState, useCallback, useMemo } from 'react'
import { Rendering_Child } from './Rendering_Child'

export const Rendering = () => {
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
    /* useCallback: 関数のメモ化 ----------------------------------------------------------------- */
    const onClickClose = useCallback(() => setOpen(false), [setOpen])

    const temp = useMemo(() => 1 + 2, [])
    console.log(temp)

    return (
        <div>
            <h1>Rendering</h1>
            <h2>Get Child</h2>
            {/* eslint-disable-next-line */}
            <Rendering_Child isOpen={open} isClose={onClickClose} />
            <button onClick={onClickToggle}> onClickToggle </button>
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
