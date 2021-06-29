import React from 'react'
import { memo } from 'react'

const style = {
    background: 'khaki',
    color: 'orange',
}

// 全体をmemoで囲い、他の関数作動時の再レンダリングを防ぐ
export const Rendering_Child = memo((props) => {
    // 親から命令してもらうための仮引数
    const { isOpen, isClose } = props
    // console.log('レンダリング Rendering_Child')

    const data = [...Array(3).keys()]
    // console.log(data)

    data.forEach(() => {
        // console.log('xxx...')
    })
    return (
        <div>
            {isOpen ? <div style={style}>Open!!</div> : <div>null</div>}
            <button onClick={isClose}>isClose</button>
        </div>
    )
})
