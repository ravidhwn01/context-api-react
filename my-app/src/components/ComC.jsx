import React from 'react'
import { FirstName } from '../App'
export default function ComC() {
  return (
    <>
    <FirstName.Consumer  >
        {(fname ,stAge) =>{
            return  <h1>my name is {fname}! and age is {stAge}</h1>
        }}
    </FirstName.Consumer>
       
    </>
  )
}
