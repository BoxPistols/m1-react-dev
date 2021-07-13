import React, { useState } from 'react'

export const Input = () => {
    const [name, setName] = useState('xxx')

    return (
        <div>
            <div className='row'>
                <div className='column column-50 column-offset-25'>
                    <h4>Input</h4>
                    <div>
                        <p>{name}</p>
                        <form>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
