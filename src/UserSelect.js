import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="user-select-wrapper">
        <div className="user-select">
          <div className="user-selection-toggle">
            <div className="user-selection-type active">Teams</div>
            <div className="user-selection-type">Users</div>
          </div>
          <div className="user-selection-display">
            <div className="display-type active">
              <ul>
                <li>Management</li>
                <li>Brewhouse</li>
                <li>Packaging</li>
                <li>Deliveries</li>
                <li>Taproom</li>
              </ul>
            </div>
            <div className="display-type">
              <ul>
                  <li>Josh</li>
                  <li>John</li>
                  <li>Greg</li>
                  <li>Neilson</li>
                  <li>Angela</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
