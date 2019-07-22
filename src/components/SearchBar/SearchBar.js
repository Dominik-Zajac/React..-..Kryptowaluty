import React from 'react';
import styled from 'styled-components';

import styleVars from '../../shared/styles/variables';

const Wrapper = styled.div`
  display: flex;
  margin-right: ${styleVars.baseMargin};
  justify-content: flex-end;
  margin-bottom: 24px;
  @media (max-width: 800px) {
    margin-right: ${styleVars.smallMargin};
  }
`;

const Input = styled.input`
  transition: all 0.3s ease-in-out;
  outline: none;
  padding: 0.5em 0.6em;
  margin: 5px 1px 3px 0;
  border: 1px solid #dddddd;
  border-radius: 4px;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

const SearchBar = ({ searchQuery, handleChange }) => {
  return (
    <Wrapper>
      <Input value={searchQuery} onChange={handleChange} />
    </Wrapper>
  );
};

export default SearchBar;