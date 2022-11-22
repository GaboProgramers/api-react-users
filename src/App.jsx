import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    console.log(users);
    setUser(users)
  }

  return (
    <div className="App">
      <h1>consumiendo una api</h1>
      <ul className='list'>
        {
          user.map(({ id, name, email, phone, username, website,
            address: { geo: { lat, lng }, city, street, suite, zipcode },
            company: { bs, catchPhrase } }) => (
            <div className='list__user' key={id}>
              <p><strong>Nombre: </strong>{name}</p>
              <p><strong>Email: </strong>{email}</p>
              <p><strong>Phone: </strong>{phone}</p>
              <p><strong>UserName: </strong>{username}</p>
              <p><strong>WebSite: </strong>{website}</p>
              <p><strong>Address: </strong>{city}</p>
              <p><strong>street: </strong>{street}</p>
              <p><strong>suite: </strong>{suite}</p>
              <p><strong>zipcode: </strong>{zipcode}</p>
              <p><strong>lng: </strong>{lat}</p>
              <p><strong>lng: </strong>{lng}</p>
              <p><strong>bs: </strong>{bs}</p>
              <p><strong>catchPhrase: </strong>{catchPhrase}</p>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default App
