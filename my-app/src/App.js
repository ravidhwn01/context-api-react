import React  from 'react'
import { createContext } from 'react'
import Coma from './components/Coma'
const FirstName = createContext();
const LasttName = createContext();
const App = ()=>{
 
  return(
    <>
    
    <FirstName.Provider value={"Ravi "} >
      <LasttName.Provider value={"Dhawan"}  >
      <Coma/>
      </LasttName.Provider>
     </FirstName.Provider>
      
    </>
  )
}

export default App;
export {FirstName , LasttName }