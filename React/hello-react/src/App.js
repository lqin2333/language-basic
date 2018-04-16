import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component { 

  constructor(){
    super();
    this.state={
      age: 10
    }
    
  }

  onGreet(homeAge){
      console.log(homeAge);

  }



  render() {
    //------Objects-----
    //Obj
    const userA ={
      name: 'Anna',
      hobbies: ['Sports','Reading']
    }

    //-----return-----
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Home name={'John'} iAge={12} user={userA} greet={this.onGreet}>
                <p>I am child</p>
                {/*这里如果没了p tag就不行了 会报错，因为home里加了PropType来限制*/}

              </Home>
              {this.state.age}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-1 col-xs-offset-11">
              <Header />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
