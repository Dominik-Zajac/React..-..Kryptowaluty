import React, { Component } from 'react';
// import './App.css';

import Header from '../components/Header/Header';
import CoinList from '../components/CoinList/CoinList';

class App extends Component {
    state = {
        cryptos: [
            { name: "Bitcoin", acronym: "BTC", value: 111111, cap: 188888888888 },
            { name: "Etherum", acronym: "ETH", value: 800, cap: 82222222222 },
            { name: "NEO", acronym: "NEO", value: 100, cap: 7000000000 },
            { name: "EOS", acronym: "EOS", value: 10, cap: 5555555555 }
        ],
        marketCap: 452222221115,
    };

    render() {
        const { marketCap, cryptos } = this.state;
        return (
            <div>
                <Header cap={marketCap} />
                <CoinList cryptos={cryptos} />
            </div>
        );
    };
};

export default App;