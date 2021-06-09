import React, { useState } from 'react';

const AutionContext = React.createContext(null);

export const AutionProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <AutionContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AutionContext.Provider>
  );
};

export default AutionContext;
