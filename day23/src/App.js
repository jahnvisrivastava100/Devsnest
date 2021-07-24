import React from 'react';
import useCustomCounter from './useFetch';
import './App.css';
function App(){
  const data = useCustomCounter();
  return( 
    <React.Fragment>
<h1>Count up : {data.count}</h1>
<button type ="button" onClick ={data.handleIncrement}>Click Me</button>
    </React.Fragment>
  )
};
// const App =()=> {
//   const state = useState() ;
//   const [count,setCount] = useState(1);

//   //using hooks

// const IncNum = ()=>{
//  setCount(count + 1);

// };

//   return(
//     <>
//     <h1> {count}</h1>
//     <button onClick={IncNum}>Click</button>
//     </>
//   );
// };
export default  App;