import React, { Component } from 'react'

const PhoneContext = React.createContext();
// CONTEXT A=HAS 2 STEPS: 1. Provider AND 2.Consumer 

class PhoneProvider extends Component {
  render() {
    return (
      <PhoneContext.Provider value="this is from context">
        {this.props.children}
      </PhoneContext.Provider>
    )
  }
}
const PhoneConsumer = PhoneContext.Consumer;

export { PhoneProvider, PhoneConsumer };
