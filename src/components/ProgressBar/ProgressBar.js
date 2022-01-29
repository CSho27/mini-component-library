/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

function ProgressBar({ value, size }) {
  const numericValue = sanitizeValue(value);
  const stringValue = numericValue.toString();

  return <Background 
    role="progressbar" 
    aria-valuenow={stringValue} 
    aria-valuemin="0" aria-valuemax="100"
    size={size}
  >
    <Bar value={numericValue} size={size}/>
  </Background>
  
  function sanitizeValue(value) {
    if(!value) return 0;
    if(value < 0) return 0;
    if(value > 100) return 100;
    else return value;
  }
};

const sizes = {
  small: `
    --background-height: 8px;
    --background-radius: 4px;
  `,
  medium: `
    --background-height: 12px;
    --background-radius: 4px;
  `,
  large: `
    --background-height: 24px;
    --background-radius: 8px;
    --background-padding: 4px;
  `
}

const Background = styled.div`
  ${p => sizes[p.size]}
  background-color: ${COLORS.transparentGray15};
  height: var(--background-height);
  width: 100%;
  border-radius: var(--background-radius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--background-padding);
`

const Bar = styled.div`
  --bar-radius: 4px;
  --percent-progress: ${p => p.value}%;
  --right-edge-radius: calc(var(--bar-radius) + var(--percent-progress) - 100%);
  background-color: ${COLORS.primary};
  width: var(--percent-progress);
  height: 100%;
  border-top-left-radius: var(--bar-radius);
  border-bottom-left-radius: var(--bar-radius);
  border-top-right-radius: var(--right-edge-radius);
  border-bottom-right-radius: var(--right-edge-radius);
`

export default ProgressBar;
