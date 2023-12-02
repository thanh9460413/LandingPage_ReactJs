// ContactsTable.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles } from '@material-ui/core';
import { deleteContact } from '../actions/actions';

const useStyles = makeStyles({
  addButton: {
    marginLeft: 'auto', // Set marginLeft to 'auto' to push the button to the right
    marginTop: 10,
    marginBottom: 10,
    marginRight:10,
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  actionButtons: {
    marginRight: 10,
  },
  notFoundContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

const ContactsTable = ({ searchTerm }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.contacts);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Button className={classes.addButton} variant="contained" color="primary" onClick={() => navigate('/add')}>
        Add Contact
      </Button>
      <TableContainer component={Paper}>
        <Table>
          {/* Table header */}
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {/* Table body */}
          <TableBody>
            {searchTerm
              ? (filteredContacts.length > 0 ? filteredContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.id}</TableCell>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>
                    <Button className={classes.actionButtons} variant="contained" color="primary" onClick={() => handleEdit(contact.id)}>
                      Edit
                    </Button>
                    <Button className={classes.actionButtons} variant="contained" color="secondary" onClick={() => handleDelete(contact.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
                : <TableRow>
                  <TableCell colSpan={5}>
                    <div className={classes.notFoundContainer}>
                      Không tìm thấy liên hệ.
                    </div>
                  </TableCell>
                </TableRow>
              )
              : contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.id}</TableCell>
                  <TableCell>{contact.name}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>
                    <Button className={classes.actionButtons} variant="contained" color="primary" onClick={() => handleEdit(contact.id)}>
                      Edit
                    </Button>
                    <Button className={classes.actionButtons} variant="contained" color="secondary" onClick={() => handleDelete(contact.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactsTable;
