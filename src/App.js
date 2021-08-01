import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import Profile from './components/Profile'
import { connect } from 'react-redux';


import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import { fetchSmurfs } from "./actions";

class App extends Component {
  componentDidMount() {
    // axios.get('http://localhost:3333/smurfs')
    // .then(res => console.log(res))
    // .catch(err => console.log('Axios Error', err));
    this.props.fetchSmurfs()
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path={`/profile/:id`}><Profile/></Route>
            <Route path='/'><SmurfList/><AddForm/></Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default connect(null,{ fetchSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.