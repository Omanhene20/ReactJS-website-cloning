import React from "react";
import "./style.css";
import Header from "./component/Header";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import  Basics from './component/Basics';
import Types from './component/Types';
import Equipment from './component/Equipment';
import Where from './component/Where';
import Safety from './component/Safety';
import Footer from './component/Footer';
import Navigation from './component/Navigation'
import "./component/styles.css"

export default function App() {
  return (
      <div>
         <Header/>
         <BrowserRouter>
    <div>
     {<Navigation />}

     <Switch>
        <Route exact path="/" component= {Basics}  />
        <Route path="/types" component={Types} />
        <Route path="/equipment" component={Equipment} />
        <Route path="/where" component={Where} />
        <Route path="/safety" component={Safety} />
      </Switch>

    </div>
  </BrowserRouter>
  
  <Footer/>
    </div>
  );
}
