import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return <OuterWrapper size={size} width={width}>
    <InnerWrapper>
      <Icon id={icon} size={iconSize[size]} strokeWidth={iconStroke[size]}></Icon>
      <Input placeholder={placeholder}></Input>
    <VisuallyHidden>{label}</VisuallyHidden>
    </InnerWrapper>
  </OuterWrapper>
};

const iconSize = {
  small: 16,
  large: 20
}
const iconStroke = {
  small: 1,
  large: 2
}
const size = {
  small: `
    --border-width: 1px;
    --font-size: 14px;
  `,
  large: `
    --border-width: 2px;
    --font-size: 18px;
  `
}

const OuterWrapper = styled.div`
  ${p => size[p.size]}
  width: ${p => p.width}px;
  color: ${COLORS.gray700};
  border-radius: 2px;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: solid 2px ${COLORS.black};
    outline-offset: 2px;
  }
`

const InnerWrapper = styled.div`
  ${p => size[p.size]}
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: solid var(--border-width) ${COLORS.black};
`

const Input = styled.input`
  ${p => size[p.size]}
  border: none;
  outline: none;
  font-size: var(--font-size);
  font-weight: bold;
  color: inherit;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }
`

export default IconInput;
