import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {displayedValue}
      <Selector value={value} onChange={onChange}>
        {children}
      </Selector>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`

const Selector = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
`

export default Select;
