import React from 'react';
import { Link } from 'react-router-dom';
import data from './../data.json';
import data1 from './../data1.json';
import data2 from './../data2.json';
import styles from './Women.module.css'
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


function MainPage(){
  const classes = useStyles();
  return(
    <>
      <div><h1 className={styles.head}>WOMEN</h1></div>
      <div className={classes.root2}>
      <Grid container spacing={1}>
         {Object.keys(data).slice(0, 3).map(k => { 
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
  
    <div><h1 className={styles.head}>MEN</h1></div>
      <div className={classes.root2}>
      <Grid container spacing={1}>
         {Object.keys(data1).slice(0, 3).map(k => { 
         return(
         
            <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
          <CardActionArea>
          
          <div className={styles.main}>
         <div key={k} className={styles.maindiv1a}>
           <Link to={k}>
            <CardMedia
          component="img"
          alt="Shoe Image"
          height="150"
          image={data1[k].img}
          title="Contemplative Reptile"
        />
         </Link>
         <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
         {data1[k].name}
          </Typography>
          </CardContent>
        </div>
        <div className={styles.textdiv}  >
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
  
<div><h1 className={styles.head}>KIDS</h1></div>
      <div className={classes.root2}>
      <Grid container spacing={1}>
         {Object.keys(data2).slice(0, 3).map(k => { 
         return(
         
            <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.root}>
          <CardActionArea>
          
          <div className={styles.main}>
         <div key={k} className={styles.maindiv1b}>
           <Link to={k}>
            <CardMedia
          component="img"
          alt="Shoe Image"
          height="150"
          image={data2[k].img}
          title="Contemplative Reptile"
        />
         </Link>
         <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
         {data2[k].name}
          </Typography>
          </CardContent>
        </div>
        <div className={styles.textdiv}  >
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
  
<div><h1 className={styles.head}>WHO WE ARE</h1></div>
<div><p className={styles.para}> Here at SHOEZONE.com, we realize that style and prosperity begin with the correct shoes. We likewise understand that effectively finding the size and style to meet your requirements is vital to your web based shopping knowledge. Since beginning our web based business website in 2009, we’ve been endeavoring to present to you that perfect shopping experience.

We pride ourselves on conveying hard-to-discover styles, sizes and widths since we realize that each individual’s needs contrast. Regardless of whether you’re experiencing issues looking over our vast determination of different shoes or you have a straightforward inquiry, our client benefit group is prepared and willing to help. </p></div>
    </>
    )
}

export default MainPage;