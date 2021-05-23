import React from 'react'

const style = {
    background: 'khaki',
    color: 'orange',
}

export const Page1_Child = (props) => {
    const { isOpen } = props
    return <div>{isOpen ? <div style={style}>Open!!</div> : <div>null</div>}</div>
}
