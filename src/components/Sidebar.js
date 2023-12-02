// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/">
          <MoveToInboxIcon />
          <ListItemText primary="Contacts" />
        </ListItem>
        {/* Add more sidebar items if needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
