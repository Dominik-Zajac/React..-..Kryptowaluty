import React, { Component } from 'react';
// import './App.css';

import Header from '../components/Header/Header';
import Coin from '../components/CoinList/Coin/Coin';

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
        const { cryptos } = this.state;
        return (
            <div>
                <Header cap={this.state.marketCap} />
                <Coin
                    name={cryptos[0].name}
                    acronym={cryptos[0].acronym}
                    value={cryptos[0].value}
                    cap={cryptos[0].cap}
                />
                <Coin
                    name={cryptos[1].name}
                    acronym={cryptos[1].acronym}
                    value={cryptos[1].value}
                    cap={cryptos[1].cap}
                />
                <Coin
                    name={cryptos[2].name}
                    acronym={cryptos[2].acronym}
                    value={cryptos[2].value}
                    cap={cryptos[2].cap}
                />
                <Coin
                    name={cryptos[3].name}
                    acronym={cryptos[3].acronym}
                    value={cryptos[3].value}
                    cap={cryptos[3].cap}
                />
            </div>
        );
    };
};

export default App;