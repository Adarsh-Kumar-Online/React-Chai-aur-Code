
import Chai from "./Chai"

function App() {

  const userName = "OfflineTomato";     // Creating variables. They can be evaluated in this area too.
  // To see how it actually works in React behind the scenes go to main.jsx

  return (
    <>
      <h1>Vite Project</h1>
      <Chai />
      <p>A paragraph</p>
      <h3>Welcome {userName}</h3>           {/* using variables inside our return; Inside the curly braces is Expression, final evaluated expression, the final value after calculation outside from here. It cannot be evalueated inside the curly braces using JS. We cannot write: if(true) return value etc. inside this*/}
    </>
  )
}

export default App
