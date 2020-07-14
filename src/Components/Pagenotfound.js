import React from 'react';
import { Typography, Paper} from '@material-ui/core';
import styles from './Women.module.css'
import { Link } from 'react-router-dom';


function Pagaenotfound() {
    return(
        <>
        <Paper className={styles.checkout}>
<Typography variant='h1'>PARDON</Typography> 
<Typography variant='h5'>the page you are looking for not found</Typography>
    <br/> 
    <Link to='/'>Back to Home</Link>
   </Paper>
        </>
    )
}
export default Pagaenotfound;