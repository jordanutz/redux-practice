import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, createPolicy, deletePolicy, createClaim} from './actions';

const App = () => {

   const counter = useSelector(state => state.counter)
   const isLogged = useSelector(state => state.isLogged)
   const createdPolicies = useSelector(state => state.policies)
   const dispatch = useDispatch()

   console.log(createdPolicies)

   return (
      <div>
         <h1>Counter</h1>
         {counter}
         <button onClick={() => dispatch(increment(5))}>+</button>
         <button onClick={() => dispatch(decrement())}>-</button>
         {isLogged && <h3>Authenticated Information</h3> }

         <button onClick={() => dispatch(createPolicy('Alex'))}>Create Policy</button>

      </div>
   )
}

export default App