import React, { Component } from 'react';
import Game from '../Component/Game';
class Layout extends Component{
    render() {
        return (
          <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <ul>
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Oculus</li>
            </ul>
            <Game/>
          </div>
        );
      }
}
export default(Layout)