import React from 'react';
import PropTypes from 'prop-types';

import Coin from './Coin/Coin';

const CoinList = ({ cryptos }) => {
    const isListEmpty = cryptos.length === 0;

    const coinList = isListEmpty ? (
        <p>Brak wynikow dla wpisanej frazy.</p>
    ) : (
            cryptos.map(crypto => <Coin key={crypto.acronym} {...crypto} />)
        )

    return coinList;
};

CoinList.propTypes = {
    cryptos: PropTypes.arrayOf(PropTypes.object)
};

CoinList.defaultProps = {
    cryptos: []
};

export default CoinList;