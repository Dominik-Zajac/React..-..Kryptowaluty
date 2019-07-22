import React, { Component } from 'react';
import debounce from 'lodash.debounce';

/* Components */
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import CoinList from '../components/CoinList/CoinList';

class App extends Component {
    state = {
        cryptos: [
            {
                name: 'Bitcoin',
                acronym: 'BTC',
                value: 111111,
                change: 2.3,
                cap: 188888888888,
                supply: 188888888888,
            },
            {
                name: 'Etherum',
                acronym: 'ETH',
                value: 800,
                change: 2.1,
                cap: 82222222222,
                supply: 82222222222
            },
            {
                name: 'NEO',
                acronym: 'NEO',
                value: 100,
                change: 1.3,
                cap: 7000000000,
                supply: 7000000000
            },
            {
                name: 'EOS',
                acronym: 'EOS',
                value: 10,
                change: -1.2,
                cap: 5555555555,
                supply: 5555555555
            }
        ],
        matchedCryptos: null,
        marketCap: 452222221115,
        searchQuery: '',
    };

    searchChangeHandler = event => {
        this.setState(
            { searchQuery: event.target.value }, this.setMatchedCryptos
        );
    };

    setMatchedCryptos = debounce(() => {
        const cryptos = [...this.state.cryptos];

        function isMatched(phrase) {
            const regex = new RegExp(`\\b${phrase}.*\\b`, 'i');
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
                <CoinList cryptos={this.state.matchedCryptos !== null ?
                    this.state.matchedCryptos : this.state.cryptos} />
            </div>
        );
    };
};

export default App;