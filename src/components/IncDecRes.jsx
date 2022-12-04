import Button from 'react-bootstrap/Button';
import useCounter from './useCounter';



const IncDecRes = () => {
  const{count,increment,decrement,reset} =useCounter()
  return (
    <div className='py-5 '>
      <h3 className='pb-2'>{count}</h3>
      <Button variant="primary" onClick={increment} >Increment</Button>
      <Button variant="success" onClick={decrement} className='mx-4'>Decrement</Button>
      <Button variant="dark " onClick={reset}>Reset</Button>
      <hr />
    </div>
  )
}

export default IncDecRes
