import React, { Component } from 'react';
import './App.css';

import Header from '../components/Header/Header';
import Coin from '../components/CoinList/Coin/Coin';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Header />
                <Coin />
            </div>
        );
    }
}
export default App;