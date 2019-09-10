import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actionCreator from './store/actions';
import './logo.svg';


class App extends Component {
 render() {
    return (
      <div className="App">
        <h1> Hello Abhay </h1>
        <h3>Age:<span>{this.props.age}</span></h3>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick= {this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src="logo" alt="app-logo" className="App-logo"/>}
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return {
    age:state.age,
    loading:state.loading
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    onAgeUp: () => dispatch(actionCreator.ageUp(1)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1))
  }
}
export default connect(mapStateToProps, mapDispatchToProps )(App) ;
