// AddContactModal.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addContact } from '../actions/actions';
import { Formik, Form, Field } from 'formik';
import { Button, TextField, Grid, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputField: {
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
  }));

const AddContactModal = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (values) => {
    dispatch(addContact(values));
    navigate('/');
  };

  return (
    <Formik initialValues={{ name: '', email: '', phone: '' }} onSubmit={handleSave}>
      <Form className={classes.form}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Add Contact</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field as={TextField} fullWidth label="Name" name="name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Field as={TextField} fullWidth label="Email" name="email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Field as={TextField} fullWidth label="Phone" name="phone" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <Button style={{marginRight:10}} type="submit" variant="contained" color="primary">
                Save
              </Button>
              <Button type="button" variant="contained" onClick={() => navigate('/')}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Form>
    </Formik>
  );
};

export default AddContactModal;
