import React, { useState } from 'react';

const AutionContext = React.createContext(null);

const CATALOGOS = [{}];
export const AutionProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [catalogos, setCatalogos] = useState(CATALOGOS);
  const [user, setUser] = useState({});
  const data = {
    authenticated,
    setAuthenticated,
    catalogos,
    user,
    setUser,
    isInvitado: user && user.rol === 'invitado'
  };
  return (
    <AutionContext.Provider value={data}>{children}</AutionContext.Provider>
  );
};

export default AutionContext;
