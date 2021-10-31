import React, { useState, useEffect } from 'react';

//
import axios from 'axios'

const url = 'https://api.github.com/users';

// second argument

const ProfileData = () => {
  const [users, setUsers] = useState([]);
/*
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
      };
    */
    const getUsers =() => {
      axios
      .get(url)
      .then(response => {
        console.log('promise fulfilled')
          setUsers(response.data);
      })

      // console.log(users);
        };




  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProfileData;
