import React, { useReducer } from 'react'

const reducer=(state,action)=>{
     switch(action.type){
        case 'Increment':
            return{count:state.count+1,istext:state.istext}
        case 'toogletext':
            return{count:state.count,istext:!state.istext}
            default: return state
}
}
const UseReducer = () => {
    const[state,dispatch]=useReducer(reducer, {count:0 , istext:true})
  return (
    <div>
      <h3>{state.count}</h3>
      <button className="btn btn-primary" onClick={()=>{dispatch({type:'Increment'});
      dispatch({type:'toogletext'});
      } }>ADD</button>
   {state.istext && <p>Hello</p> }
    </div>
  )
}

export default UseReducer
