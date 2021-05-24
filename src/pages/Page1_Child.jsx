import { memo } from 'react'

const style = {
    background: 'khaki',
    color: 'orange',
}

export const Page1_Child = memo((props) => {
    const { isOpen } = props
    console.log('レンダリング Page1_Child')

    const data = [...Array(200).keys()]
    console.log(data)

    data.forEach(() => {
        console.log('xxx...')
    })
    return <div>{isOpen ? <div style={style}>Open!!</div> : <div>null</div>}</div>
})
