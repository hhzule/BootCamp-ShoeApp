import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Paper} from '@material-ui/core';
import styles from './Women.module.css'
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        width: '25ch',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: "0 auto",
      },
    },
  }));
  

function Checkout() {
    const classes = useStyles();
    return(
        <>
        <Paper >
<div className={styles.checkout} >
        <form className={classes.root} noValidate autoComplete="off">
      <div >
        <TextField required id="standard-required" label="Required" defaultValue="First Name" />
      <br />
        <TextField required id="standard-required" label="Required" defaultValue="Last Name" />
        <br />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <br />
        <TextField
          id="standard-number"
          label="Card Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    
      </div>
     
    </form>
    <br />
        <Link to='/'>Proceed To Pay</Link>
        </div>
        </Paper>
       
        </>
    )
}
export default Checkout;
