// import React from 'react';

// export default class App extends React.Component {
//   render() {
//     return (
//      <div style={{textAlign: 'center'}}>
//         <h1>Hello World</h1>
//       </div>);
//   }
// }

import React, { Component } from 'react';

/** 
 * This class creates the button.
 * It has a function, handleClick(), that adds the value of the button
 * to increment it. When the button is clicked, sends the value to the
 * incrementCounter function (App class)
 * 
 * Then, it render the button (only the text). 
*/

class Button extends Component {    //class component
  handleClick = () => {   //a function
    this.props.onClickFunction(this.props.incrementValue);    //The props contains the attribute incrementValue
  };
  
  render() {
    return(
      <button onClick = {this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

/**A function component to render the result */

const Result = (props) => {   //function component
  return(
    <div>{props.counter}</div>
  );
};

class App extends Component {
  state = { counter: 0 };
  
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter : prevState.counter + incrementValue
    }));
  };
  
  render() {
    return(
      <div>
        <Button incrementValue = {1} onClickFunction = {this.incrementCounter} />
        <Button incrementValue = {5} onClickFunction = {this.incrementCounter} />
        <Button incrementValue = {10} onClickFunction = {this.incrementCounter} />
        <Button incrementValue = {100} onClickFunction = {this.incrementCounter} />
        <Result counter = {this.state.counter}  />
      </div>
    );
  }
}

//ReactDOM.render(<App />, mountNode); //two arguments: The component to render and the html node that we want to use to display the component
export default App;