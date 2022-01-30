import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <span>{displayedValue}</span>
      <Icon id='chevron-down'/>
      <Selector value={value} onChange={onChange}>
        {children}
      </Selector>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  gap: 24px;
  align-items: center;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: solid 2px ${COLORS.black};
  }
`

const Selector = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`

export default Select;
