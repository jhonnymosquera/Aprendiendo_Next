import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}

export default function Usuario() {
  // Uso de la interface        aqui ↓
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 'ASDAMSDA',
      name: 'Jhonny Mosquera',
    });
  };

  return (
    <div>
      <h3>Usuario</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Boton
      </button>

      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
}
