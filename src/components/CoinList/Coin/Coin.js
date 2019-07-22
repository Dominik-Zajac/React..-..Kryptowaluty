import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* Components */
import CoinListCell from '../CoinListCell/CoinListCell';
import CoinListRow from '../CoinListRow/CoinListRow';

/* RegExp */
import formatAsCurrency from '../../../shared/utils/helpers';

/* Styles */
const percentChangePlusColor = '#04BF12';
const percentChangeMinusColor = '#dd2c00';
const PercentChange = styled.div`
  color: ${props =>
        props.change > 0 ? percentChangePlusColor : percentChangeMinusColor};
`;
/* ----------------------- */

const Coin = ({ name, value, change, cap, supply, acronym }) => (
    <CoinListRow>
        <CoinListCell isLarge>
            <div>{name}</div>
        </CoinListCell>
        <CoinListCell>{formatAsCurrency(value)}</CoinListCell>
        <CoinListCell>
            <PercentChange change={change}>{change} %</PercentChange>
        </CoinListCell>
        <CoinListCell>{formatAsCurrency(cap)}</CoinListCell>
        <CoinListCell>
            {formatAsCurrency(supply)}
            {` ${acronym}`}
        </CoinListCell>
    </CoinListRow>
);

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    change: PropTypes.number.isRequired,
    cap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    supply: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    acronym: PropTypes.string.isRequired,
};

export default Coin;