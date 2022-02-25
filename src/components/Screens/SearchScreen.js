import React, { useState } from 'react'

export const SearchScreen = () => {
    const [input, setInput] = useState('');
    
    const changeHandler = (e) => {
        setInput(e.target.value.toLowerCase())
    }
    
    const submitHandler = e => {
        e.preventDefault();
        console.log(input)
    }

    return (
        <div className='search'>
            <h1>PokeSearch</h1>
            <form onSubmit={submitHandler}>
                <input type='text'
                placeholder='Search by name or id'
                onChange={changeHandler} />
            </form>
        </div>
    )
}
