import React, {Component}from 'react';
// import { connect } from 'react-redux';
// import EmployeeDetails from "./EmployeeList"
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EmployeeList from './EmployeeList';



class App extends Component{   
render(){
  return(
    <div className="container">
      <EmployeeList/>
    </div>
  )
}
  }


export default App;
