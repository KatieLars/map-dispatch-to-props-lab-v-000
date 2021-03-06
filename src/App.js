import React, { Component } from 'react';
import { ConnectedRestaurantInput } from './components/RestaurantInput';
import { ConnectedRestaurants } from './components/Restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRestaurantInput store={this.props.store}/>
        <ConnectedRestaurants />
      </div>
    );
  }
};

export default App;
