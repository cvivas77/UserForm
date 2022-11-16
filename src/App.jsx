import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import UsersList from './Components/UsersList'
import UsersForm from './Components/UsersForm';


function App() {
  const [usersList, setUsersList] = useState([]);
  const [userSelect, setUserSelect] = useState(null);
  

  useEffect(() =>{
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsersList(res.data))
  }, [])
  

  const getUsers = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsersList(res.data))
  }

  const selectUser = (users) => {
    setUserSelect(users)
  }

  const deselectUser = () => setUserSelect(null);


  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}`)
      .then(() => getUsers())
      .catch(error => console.log(error.response?.data));
  }

  return (
    <div className="App">
      <div>
      <UsersForm getUsers={getUsers} 
        userSelect={userSelect}
        deselectUser={deselectUser}/>
      </div>
      
      <div>
      <UsersList usersList={usersList}
        selectUser={selectUser}
        deleteUser={deleteUser}
        />
      </div>
      
    </div>
  )
}

export default App
