import React from 'react'

function List({contacts}) {
  return (
    <div>
      <ul>
        {contacts.map((contact,i)=>(
          <li key={i}>{contact.full_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
