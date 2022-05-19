import React, { useState } from 'react'
import Input from "./Input"

export default function App() {

   const [id, setId] = useState('')
   const [name, setName] = useState('')
   const [placement, setPlacement] = useState('')
   const [method, setMethod] = useState('POST')

   const onSubmit = (e) => {
      e.preventDefault()
      const info = {
         name: name,
         placement: placement,
         id: id
      }

      fetch(`https://627506605dc4f5764b9d4a84.mockapi.io/api/v1/user/${method === "POST" ? '' : id}`, {
         method: method,
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(info)
      })

      setId('')
      setName('')
      setPlacement('')

      alert(`${(method === "POST" && `Şəxs əlavə olundu!`) ||
      (method === "PUT" && `ID: ${id}-ci Şəxs dəyişdirildi!`) ||
      (method === "DELETE" && `ID: ${id}-ci Şəxs silindi!`)}`)
   }

   const idChange = (e) => {
      setId(e)
   }
   const nameChange = (e) => {
      setName(e)
   }
   const placementChange = (e) => {
      setPlacement(e)
   }
   const onSelect = (e) => {
      setMethod(e.target.value)
   }

   return (
      <div className='container'>
         <h1>Change API</h1>
         <select onChange={onSelect}>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
         </select>
         <div className="wrapper">
            <form onSubmit={onSubmit}>
               {method === "POST" ||
                  (<Input
                     Type="number"
                     Value={id}
                     Change={idChange}
                     Placeholder="ID:"
                  />)}

               {method === "DELETE" ||
                  (<>
                     <Input
                        Type="text"
                        Value={name}
                        Change={nameChange}
                        Placeholder="Name:"
                     />
                     <Input
                        Type="text"
                        Value={placement}
                        Change={placementChange}
                        Placeholder="Placement:"
                     />
                  </>)}
               <button>Add</button>
            </form>
         </div>
      </div>
   )
}