import React from 'react';



const UsersList = ({usersList, selectUser, deleteUser}) => {

    const submit = () => {

    }

  return (

  <div className='container-list'>
    <div className='box-head'>
      <ul>
        <li>Name</li>
        <li>Last Name</li>
        <li>Email</li>
        <li>Password</li>
        <li>Birthday</li>
      </ul>
    </div>
    <div className='data'>
      <ul>
        {usersList.map(user => (
          <li key={user.id}>
            <div className='box-data'>
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
              <p>{user.email}</p>
              <p>{user.password}</p>
              <p>{user.birthday}</p>
              <div className='btn2'>
                <button onClick={() => selectUser(user)} type="submit">Edit</button>
                <button onClick={() => deleteUser(user.id)} type="submit">Delete</button>
              </div>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  </div>
      

);
};
export default UsersList;