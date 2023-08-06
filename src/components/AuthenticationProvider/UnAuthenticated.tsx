import React, {PropsWithChildren, useContext} from 'react';
import {AuthContext} from '.';

const UnAuthenticated = ({children}: PropsWithChildren) => {
  const {status} = useContext(AuthContext);
  const {isAuthenticated} = status;

  return !isAuthenticated ? <>{children}</> : null;
};

export default UnAuthenticated;
