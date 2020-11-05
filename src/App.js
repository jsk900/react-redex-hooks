import React from 'react'
import {useDispatch} from 'react-redux'
import {counterAction} from './actions'
import Counter from './Counter'
import './App.css';

const  App = () => {

  const dispatch = useDispatch()
  return (
    <main>
     <button onClick={() => dispatch(counterAction(1))}>Increment</button>
     <button onClick={() => dispatch(counterAction(-1))}>Decrement</button>
     <Counter />
    </main>
  );
}

export default App;
