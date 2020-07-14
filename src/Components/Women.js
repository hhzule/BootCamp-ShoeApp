import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import data from './../data.json';
import styles from './Women.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardActionArea, CardActions, Button, CardContent, CardMedia, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "50px",
  },
  root2: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "10%",
  },
});


function Women(){
    const classes = useStyles();
    return(
<div>
<div><h1 className={styles.head}>WIDE VARIETY OF WOMEN'S FOOTWEAR</h1></div>
    <Outlet />
    
    <div className={classes.root2}>
      <Grid container spacing={1}>
         {Object.keys(data).slice(0, 6).map(k => { 
         return(
         
            <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}elevation={4} >
          <CardActionArea>
          
          <div className={styles.main}>
         <div key={k} className={styles.maindiv1}>
           <Link to={k}>
            <CardMedia
          component="img"
          alt="Shoe Image"
          height="150"
          image={data[k].img}
          title="Contemplative Reptile"
        />
         </Link>
        
        </div>
        <div className={styles.textdiv}  >
        <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
         {data[k].name}
          </Typography>
          </CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Divider/>
          <CardActions>
       
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
        </div>
         
  </div>
  </CardActionArea>  
    </Card>
    </Grid>
   
)})} </Grid>
</div>
  
  </div>  )
}


export default Women;

