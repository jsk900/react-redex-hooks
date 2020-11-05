import React from 'react'
import {useSelector} from 'react-redux'

const Counter = () => {

    const count = useSelector((state) => state.count)
    
    return (
        <section>
            <h1>{count}</h1>
        </section>
    )
}

export default Counter
