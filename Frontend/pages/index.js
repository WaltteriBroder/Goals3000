import { useState } from 'react';
import { body } from '../styles/styles';
import { apiRootUrl } from '../utils';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const renderUsers = users => {
  if (!users) return null;

  return users.map(user => {
    return <div key={user.id} style={{margin: '1em 0'}}>
      <div>name: {user.name}</div>
      <div>team_name: {user.teamName}</div>
      <div>salary: {user.salary}</div>
    </div>
  });
}

const Index = () => {
  const [users, setUsers] = useState([]);

  console.log('process.env.NODE_ENV => ', process.env.NODE_ENV);
  console.log('root url => ', apiRootUrl);
  
  const getUsers = async () => {
    const res = await fetch(`${apiRootUrl}/users/all`);
    const data = await res.json();
    console.log(data);
    setUsers(data);
  }

  return <div>
    <h2>Welcome to a next.js docker boilerplate!</h2>
    <Link prefetch href="/about">
      <button>About</button>
    </Link>

    <div>
      <button className="nappula" onClick={() => getUsers()}>
        Kolkuttele!
      </button>
      <div>
        {renderUsers(users)}
      </div>
    </div>

    <style jsx global>{body}</style>
  </div>
};

export default Index;