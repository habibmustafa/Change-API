import React from 'react'

export default function Input({Type, Value, Change, Placeholder}) {
   return (
      <input type={Type} required value={Value} onChange={(e) => {Change(e.target.value)}} placeholder={Placeholder}/>
   )
}
