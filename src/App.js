// ================= REDUX =================
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';


function App() {

  // $ useSelector is a Redux hook that allows us to access the state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Basics</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable Information</h3> : 'not logged in'}
    </div>
  );
}

export default App;
