import React from 'react'
import { createContext } from 'react'
import Coma from './components/Coma'
const FirstName = createContext();
const App = ()=>{
  return(
    <>
    <FirstName.Provider value={"ravi dhawan"} > <Coma/></FirstName.Provider>
      
    </>
  )
}

export default App;
export {FirstName}