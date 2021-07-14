import React, { useState } from 'react'

export const Input = () => {
    const [name, setName] = useState({ first: 'bob', last: 'duran' })

    return (
        <div>
            <div className='row'>
                <div className='column column-50 column-offset-25'>
                    <h4>Input</h4>
                    <div>
                        <p>
                            {name.first} / {name.last}
                        </p>
                        <form>
                            <input type='text' value={name.first} onChange={(e) => setName((preName) => ({ ...preName, first: e.target.value }))} />
                            <input type='text' value={name.last} onChange={(e) => setName((preName) => ({ ...preName, last: e.target.value }))} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
