import React, { Component } from 'react';
import debounce from 'lodash.debounce';

import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import CoinList from '../components/CoinList/CoinList';

class App extends Component {
    state = {
        cryptos: [
            { name: "Bitcoin", acronym: "BTC", value: 111111, cap: 188888888888 },
            { name: "Etherum", acronym: "ETH", value: 800, cap: 82222222222 },
            { name: "NEO", acronym: "NEO", value: 100, cap: 7000000000 },
            { name: "EOS", acronym: "EOS", value: 10, cap: 5555555555 }
        ],
        matchedCryptos: [],
        marketCap: 452222221115,
        searchQuery: '',
    };

    componentWillMount() {
        this.setMatchedCryptos();
    };

    searchChangeHandler = event => {
        this.setState(
            { searchQuery: event.target.value }, this.setMatchedCryptos
        );
    };

    setMatchedCryptos = debounce(() => {
        const cryptos = [...this.state.cryptos];

        function isMatched(phrase) {
            const regex = new RegExp(`\\b${phrase}.*\\b`, "i");
            return function (crypto) {
                return Object.values(crypto).some(val => regex.test(val));
            };
        };

        const isMatchedWithSearchQuery = isMatched(this.state.searchQuery);
        const matchedCryptos = cryptos.filter(isMatchedWithSearchQuery);

        this.setState({
            matchedCryptos
        });
    }, 250);

    render() {
        const { marketCap, matchedCryptos, searchQuery } = this.state;
        return (
            <div>
                <Header cap={marketCap} />
                <SearchBar handleChange={this.searchChangeHandler} searchQuery={searchQuery} />
                <CoinList cryptos={matchedCryptos} />
            </div>
        );
    };
};

export default App;