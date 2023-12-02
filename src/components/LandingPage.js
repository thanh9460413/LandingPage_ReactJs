// LandingPage.js
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ContactsTable from './ContactsTable';
import CustomSearchBar from './SearchBar'; // Import CustomSearchBar

const LandingPage = ({ toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Lấy giá trị dark mode từ localStorage khi component được tạo ra
    const storedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(storedDarkMode === 'true');
  }, []);

  const toggleDarkModeHandler = () => {
    // Đảo ngược giá trị dark mode và lưu vào localStorage
    setDarkMode((prevDarkMode) => {
      localStorage.setItem('darkMode', (!prevDarkMode).toString());
      return !prevDarkMode;
    });
  };

  const handleSearch = (searchTerm) => {
    // Set the search term
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ marginRight: 30, flex: 1 }}>Wavelabs</Typography>
          <div style={{ flex: 1 }}>
            <CustomSearchBar onSearch={handleSearch} />
          </div>
          <div style={{ flex: 1 }}></div>
          <Button style={{}} color="inherit" onClick={() => {
            toggleDarkModeHandler();
            toggleDarkMode();
          }}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>My Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My Settings</MenuItem>
        </Menu>
      </AppBar>
      <ContactsTable searchTerm={searchTerm} /> {/* Pass searchTerm to ContactsTable */}
    </div>
  );
};

export default LandingPage;
