import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/actions';
import './App.css';

const App = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button onClick={handleToggle}>
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
