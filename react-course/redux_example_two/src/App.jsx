
import { addNum,removeNum } from "./store/CounterReducers";
import { useDispatch, useStore } from "react-redux";
import store from "./store/CounterStore";
import { useState } from "react";

function App() {
  const counterStore = useStore(store);
  const dispatch = useDispatch();
  const [count,setCount] = useState(0);
  counterStore.subscribe(()=>{
    console.log(counterStore.getState())
    setCount(counterStore.getState().counter.value);
  })

  return (
    <>
      <div>{count}</div>
      <button onClick={()=>dispatch(addNum())}>ADD</button>
      <button onClick={()=>dispatch(removeNum())}>MINUS</button>

    </>
  );
}
export default App
