import React from 'react';
import  { useParams } from 'react-router-dom';
 import data from '../data.json';
import { Button, Paper } from '@material-ui/core';
 import styles from './Women.module.css'
 
 

 function ProductsM() {
 let {id} = useParams();
 const product = data[id];
 const { name, img } = product;

    return(
<div>
    <Paper >
        <div >
   <div><h1 className={styles.head}>{name}</h1></div>
    <img src={`${img}`} alt={name} className={styles.product}/>
    </div>
    <div className={styles.buy}>
    <Button variant="contained" color="primary" href="#contained-buttons">
 Buy Now
</Button></div>
    </Paper>
</div>
 )}

export default ProductsM;

 

  