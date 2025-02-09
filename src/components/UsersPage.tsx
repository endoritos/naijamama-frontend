import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';



interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage: React.FC = () => {
  // Use the User type in the useState hook
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;