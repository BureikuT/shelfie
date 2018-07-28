import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'
import './App.css'


export default class App extends Component {
  constructor(){
    super()
  }
  
  render() {
    return (
      <div className="App">
        <Header/> 
        <Dashboard/>
        <Form/>
       
       </div>
      
    )
  }
}
