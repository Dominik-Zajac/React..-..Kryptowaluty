import React, { Component } from 'react';
import './App.css';

import Coin from './components/CoinList/Coin/coin';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Coin />
            </div>
        );
    }
}
export default App;