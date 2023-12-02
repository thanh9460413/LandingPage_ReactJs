// EditPage.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editContact } from '../actions/actions';
import { Formik, Field, Form } from 'formik';
import { Button, TextField, Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { useParams } from 'react-router-dom';

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

const EditPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const contact = useSelector((state) => state.contacts.find((c) => c.id === parseInt(id)));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!contact) {
      navigate('/');
    }
  }, [contact, navigate]);

  const initialValues = {
    name: contact?.name || '',
    email: contact?.email || '',
    phone: contact?.phone || '',
  };

  const handleSave = (values) => {
    const updatedContact = { id: contact.id, ...values };
    dispatch(editContact(updatedContact));
    navigate('/');
  };

  return (
    <div>
      {contact && (
        <Formik initialValues={initialValues} onSubmit={handleSave}>
          <Form className={classes.form}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom>
                Edit Contact
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.inputField}>
                  <Field as={TextField} fullWidth label="Name" name="name" variant="outlined" />
                </Grid>
                <Grid item xs={12} className={classes.inputField}>
                  <Field as={TextField} fullWidth label="Email" name="email" variant="outlined" />
                </Grid>
                <Grid item xs={12} className={classes.inputField}>
                  <Field as={TextField} fullWidth label="Phone" name="phone" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button  style={{marginRight:10}} type="submit" variant="contained" color="primary" className={classes.button}>
                    Save
                  </Button>
                  <Button type="button" variant="contained" onClick={() => navigate('/')} className={classes.button}>
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default EditPage;
