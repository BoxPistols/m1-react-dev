import React, { useState } from 'react'

// 　重い処理テスト
export const Counter = () => {
    const initCount = () => {
        const r = 100
        for (let i = 0; i < r; i++) {
            console.log(i)
        }
        return 0
    }
    //  初期値はアロー関数にする事で重い処理の再Renderingの回避
    const [count, setCount] = useState(() => initCount())
    const CountUp = () => {
        setCount((prevState) => prevState + 1)
    }
    return (
        <div>
            <h3>Counter {count}</h3>
            <button onClick={CountUp}>Count</button>
        </div>
    )
}
