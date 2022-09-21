import React , {useContext} from 'react'
import { FirstName , LasttName } from '../App'
export default function ComC() {
  const fname = useContext(FirstName);
  const lstname = useContext(LasttName);
  return (
    <>
    <h1>this is { fname} {lstname} </h1>
    {/* <FirstName.Consumer  >
        {(fname ,stAge) =>{
            return  <h1>my name is {fname}! and age is {stAge}</h1>
        }}
    </FirstName.Consumer> */}
       
    </>
  )
}
