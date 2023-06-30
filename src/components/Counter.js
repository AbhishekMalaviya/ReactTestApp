import { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count is: {count}</p>
      <div>
        <button onClick={() => setCount(count=>count+1)}>Increment</button>&nbsp;
        <button onClick={() => setCount(count=>count-1)}>Decrement</button>&nbsp;
        <button onClick={() => setCount(0)}>Reset count</button>
      </div>
    </div>
  )
}

export default Counter;
