/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

function ProgressBar({ value, size }) {
  return <div role="progressbar" aria-valuenow={size.toString()} aria-valuemin="0" aria-valuemax="100">{value}</div>
};

export default ProgressBar;
