// import React from 'react'
// import GreetingForm from './Form'



// export default function App() {
//   return (
//     <div>
//     <GreetingForm/>
//     </div>
//   )
// }
import './App.css';
import  Day5 from './Day5/Day_5';
import Errorboundary from './Day5/Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Day5 a={["chocalate","icecream","fruits","Cookies"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;