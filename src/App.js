// App.js
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reducer from './reducers/reducers';
import LandingPage from './components/LandingPage';
import EditPage from './components/EditPage';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddContactModal from './components/AddContactModal';

// Create Redux store
const store = createStore(reducer);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    // Apply dark mode preference from local storage or system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(localStorage.getItem('darkMode') === 'true' || prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
    
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage toggleDarkMode={toggleDarkMode} />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/add" element={<AddContactModal />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
