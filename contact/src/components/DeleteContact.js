import React from 'react'
import { Link } from 'react-router-dom'

export const DeleteContact = (props) => {

  return (
    <div className='main'>
    
    <h1 className='center'> Contact Have Been Deleted Successfully</h1>

    
   <div>
   <Link to="/">
   <button className="ui button blue center">
     Back to Contact List
   </button>
 </Link>
   </div>

    </div>
  )
}
