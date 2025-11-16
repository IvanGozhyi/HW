import './App.css'
import {useDispatch, useSelector} from "react-redux";



function App() {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.count);
    console.log(count);





    return (
        <>
            <span>{count}</span>
            <button onClick={() => dispatch({type:"increment"})}>+</button>
            <button onClick={() => dispatch({type:"decrement"})}>-</button>
        </>
    )
}

export default App
