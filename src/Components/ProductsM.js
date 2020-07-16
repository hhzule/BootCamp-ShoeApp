import React from 'react';
import  { useParams, Link } from 'react-router-dom';
 import data from '../data.json';
import { Button, Paper, Typography } from '@material-ui/core';
 import styles from './Women.module.css'
 
 

 function ProductsM() {
 let {id} = useParams();
 const product = data[id];
 const { name, img, price } = product;

    return(
<div>
    <Paper >
    <div >
   <div><h1 className={styles.head}>{name}</h1></div>
    <img src={`${img}`} alt={name} className={styles.product}/>
    </div>
    <div className={styles.textdiv}  >
       
         <Typography gutterBottom variant="h5" component="h2">
         {name}
          </Typography>
         
          <Typography variant="h4" color="textSecondary" >
         {price}
          </Typography>
         
          <div >
    <Link to='/checkout' ><Button variant="contained" color="primary" href="#contained-buttons">
 Buy Now
</Button>
</Link></div>
       
        </div>
    </Paper>
</div>
 )}

export default ProductsM;

 

  