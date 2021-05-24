import { memo } from 'react'

const style = {
    background: 'khaki',
    color: 'orange',
}

// 全体をmemoで囲い、他の関数作動時の再レンダリングを防ぐ
export const Page1_Child = memo((props) => {
    // 親から命令してもらうための仮引数
    const { isOpen, isClose } = props
    console.log('レンダリング Page1_Child')

    const data = [...Array(200).keys()]
    console.log(data)

    data.forEach(() => {
        console.log('xxx...')
    })
    return (
        <div>
            {isOpen ? <div style={style}>Open!!</div> : <div>null</div>}
            <button onClick={isClose}>isClose</button>
        </div>
    )
})
