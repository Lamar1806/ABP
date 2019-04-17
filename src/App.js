import React, {Component} from 'react';
import { Router, Route, Switch } from "react-router";
import Navbar from './Layout/NavBar/Mobile/Navbar'
import Footer from './Layout/Footer/Footer'
import Home from './Pages/Home/Home' 
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About' 
import Products from './Pages/Products/Products'
import ProductView from './Pages/ProductView/ProductView'
import Service from './Pages/Service/Service'
import NotFound from './Pages/NotFound/NotFound'

import {Helmet} from 'react-helmet'

import './App.css'
import produce from 'immer';


// this component will be rendered by our <___Router>
function App() {
    let productUrls=[
        'AboveGroundPools',
        'InGroundPools',
        'PoolChemicals',
        'PoolToys',
        'FirePits',
        'Perola',
        'Decks',
        'Concrete'
    ]

    return (
    <React.Fragment>
    <Helmet>
        <link href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css" rel="stylesheet" />
        <title>APB</title>
    </Helmet>      
    <div className="AppContainer">
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Contact' component={Contact}/>
            <Route exact path='/About' component={About}/>
            <Route exact path={`/Products/:category(${productUrls.join('|')})`} component={Products}/>
            <Route path={`/Products/:category(${productUrls.join('|')})/`} component={ProductView}/>
            <Route exact path='/Service' component={Service}/>    
            <Route component={NotFound}/>        
        </Switch>
        <Footer />        
    </div>
    </React.Fragment>
    );
  }

export default App;
