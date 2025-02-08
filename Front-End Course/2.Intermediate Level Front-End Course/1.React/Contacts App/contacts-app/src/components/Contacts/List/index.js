import {useState} from 'react'

function List({contacts}) {
  const[filterText,setFilterText] = useState('');

  const filtered=contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key]
      .toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })

  return (
    <div>
      <input placeholder='Filter Contact' value={filterText} onChange={(e)=>setFilterText(e.target.value)}/>
      <ul className='list'>
        {filtered.map((contact,i)=>(
          <li key={i}>
            <span>{contact.full_name}</span>
            <span>{contact.phone_number}</span>
            </li>
        ))}
      </ul>
      {filtered.length ? <p>Total contacts: {filtered.length}</p> : <p>Error: Could not find any contacts.</p>}
      </div>
  )
}

export default List
