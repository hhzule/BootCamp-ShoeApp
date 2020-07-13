import React from 'react';
import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import Women from './Components/Women';
import Men from './Components/Men';
import Kid from './Components/Kid';
import Checkout from './Components/Checkout';
import ProductsW from './Components/ProductsW';
import ProductsM from './Components/ProductsM';
import ProductsK from './Components/ProductsK';
import MainPage from './Components/MainPage';
import Pagenotfound from './Components/Pagenotfound';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './Components/Women.module.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    // backgroundColor: "green",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    fontWeight: 'bolder',
  },
}));

function App() {
  const classes = useStyles();
 
  return (
   <>
 <div >
    <AppBar position="static">
      <Toolbar className={styles.outerdiv}>
        <Typography className={classes.title} variant="h2" noWrap>
          Shoe Zone
        </Typography>
<div>
<Typography className={classes.title} variant="h5" noWrap>
<Link to='/'>Home</Link>
<Link to='mens'>Mens</Link>
<Link to='/womens'>Womens</Link>
<Link to='/kids'>Kids</Link>
<Link to='/checkout'>Checkout</Link>
        </Typography>
</div>
      </Toolbar>
    </AppBar>
  </div>

<Routes>
<Route path='/' element={<MainPage/>}></Route>
<Route path='womens' element={<Women/>}>
 
  <Route path=":id" element={<ProductsW />}></Route>
  <Route path='checkout' element={<Checkout/>}></Route>
  </Route>
  <Route path='mens' element={<Men/>}>
 
      <Route path=":id" element={<ProductsM />}></Route>
      <Route path='checkout' element={<Checkout/>}></Route>
  </Route>
  <Route path='kids' element={<Kid/>}>
 
  <Route path=":id" element={<ProductsK />}></Route>
  <Route path='checkout' element={<Checkout/>}></Route>
  </Route>
<Route path='checkout' element={<Checkout/>}></Route>
<Route path='*' element={<Pagenotfound/>}></Route>



</Routes>
<AppBar position="static">
      <Toolbar className={styles.footerdiv}>
        <Typography className={classes.title} variant="h5" noWrap>
         <h1> Shoe Zone</h1>
        </Typography>
<div>
<Typography className={classes.title} variant="h5" noWrap>
<Link to='/'>Home</Link>
<Link to='mens'>Mens</Link>
<Link to='/womens'>Womens</Link>
<Link to='/kids'>Kids</Link>
<Link to='/checkout'>Checkout</Link>
        </Typography>
</div>
      </Toolbar>
    </AppBar>
   </>
  );
}

export default App;
