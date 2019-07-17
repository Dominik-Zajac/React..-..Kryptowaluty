import React, { Component } from 'react';
// import './App.css';

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
                <Header cap={452222221115} />
                <Coin name='Bitcoin' acronym='BTC' value={111111} cap={188888888888} />
                <Coin name="Etherum" acronym="ETH" value={800} cap={82222222222} />
                <Coin name="NEO" acronym="NEO" value={100} cap={7000000000} />
                <Coin name="EOS" acronym="EOS" value={10} cap={5555555555} />
            </div>
        );
    }
}
export default App;