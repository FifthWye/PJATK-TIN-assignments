import React from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './Label';
import Text from './Text';
import Form from './Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>a)</h3>
        <Label label="Label" val="Value"/>
        <hr style={{
          color: '#FFF',
          backgroundColor: '#FFF',
          width: 250
          }}/>
          <h3>b)</h3>
        <Text text="Hello world!"/>
        <hr style={{
          color: '#FFF',
          backgroundColor: '#FFF',
          width: 250
          }}/>
          <h3>c)</h3>
        <Form/>
      </header>
    </div>
  );
}

export default App;
