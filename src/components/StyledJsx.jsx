import React from 'react'

export const StyledJsx = () => {
    return (
        <div>
            <h2 className='title'>- StyledJsx -</h2>
            <style jsx='true'>{`
                .title {
                    color: tomato;
                }
            `}</style>
        </div>
    )
}
