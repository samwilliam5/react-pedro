import  { useState } from 'react'


const useCounter = (inital=0) => {
    const[count,setcount]=useState(inital)

    const increment = () => {
        setcount(count+1)
    }

    
    const decrement = () => {
        setcount(count-1)
    }
    const reset = () => {
        setcount(0)
    }



  return {count,increment,decrement,reset}
}

export default useCounter
