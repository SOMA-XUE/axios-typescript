import * as React from 'react';
import './App.css';
import Hello from './components/Hello';

class App extends React.Component {
  public clickHandle22(v:any) {
    console.log(v)
  }
  public render() {
    return (
      <div className="App">
        this is app;
        <Hello title='title111' age={22} clickHandle22={this.clickHandle22}/>
      </div>
    );
  }
}

export default App;

