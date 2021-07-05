import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import initialState from '../data/static';
import reducer from './reducer';

const BuildContext = createContext();
export default BuildContext;

export function BuildProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BuildContext.Provider value={{ state, dispatch }}>
      {children}
    </BuildContext.Provider>
  );
}

BuildProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
