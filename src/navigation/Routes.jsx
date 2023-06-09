import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
// import About from './components/About';
// import NotFound from './components/NotFound';
import Products from '../components/products/Products';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default Routes;