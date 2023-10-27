// create your App component here
import { useEffect, useState } from "react"
import React from 'react'

export default function App() {

   const [image, setImage] = useState()
   const [status, setStatus] = useState()
   useEffect(() => {
      setStatus(false)
      fetch(`https://dog.ceo/api/breeds/image/random`)
       .then((res) => res.json())
       .then(dog => {
         console.log(dog.status)
         setImage(dog.message)
         setStatus(dog.status)
       })
    
   }, [])
   

  return (
    <div>
      {
         status === "success"?
          <img
            src={image}
            />
         :
         <p style={{color:"blue"}}>loading... </p>
      }
      
    </div>
  )
}

