// 'use client';

// import { useEffect, useState } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('/api/users');
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         setError('Error al cargar los usuarios');
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div>
//       <h1>Lista de Usuarios</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
'use client'
import { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(users)) {
    return <div>La respuesta de la API no es válida.</div>;
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

