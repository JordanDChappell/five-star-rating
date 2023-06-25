import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/* Styled Components */
const Span = styled.span`
  font-size: ${(props) => props.size ?? '1em'};
  color: ${(props) => (props.isFilled ? '#ffe035' : '#c0c0c0')};
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Star = ({ size, isFilled, onClick }, ref) => (
  <Span ref={ref} size={size} isFilled={isFilled}>
    <FontAwesomeIcon icon={faStar} onClick={onClick} />
  </Span>
);

const StarWithRef = forwardRef(Star);

Star.displayName = 'Star';
Star.propTypes = {
  size: PropTypes.string,
  isFilled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default StarWithRef;
