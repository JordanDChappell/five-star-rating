import React, { createRef, useEffect, useReducer } from 'react';
import styled from 'styled-components';

/* Components */
import Star from './Star';
import {
  registerFifthStarEvents,
  registerFirstStarEvents,
  registerFourthStarEvents,
  registerSecondStarEvents,
  registerThirdStarEvents,
} from './StarEvents';

/* Constants */
const STAR_SIZE = '2em';

/* Styled Components */
const Container = styled.div`
  display: flex;
  gap: 0.5em;
`;

/* State reducer */
const reducerActions = {
  SET_FILLED: 'SET_FILLED',
  SET_UNFILLED: 'SET_UNFILLED',
};
const initialState = {
  first: { isFilled: false },
  second: { isFilled: false },
  third: { isFilled: false },
  fourth: { isFilled: false },
  fifth: { isFilled: false },
};

const setStarsIsFilled = (state, stars, value) => {
  const stateClone = { ...state };
  stars.forEach((star) => {
    stateClone[star] = {
      ...stateClone[star],
      isFilled: value,
    };
  });
  return stateClone;
};

const reducerFunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case reducerActions.SET_FILLED: {
      return setStarsIsFilled(state, payload, true);
    }
    case reducerActions.SET_UNFILLED: {
      return setStarsIsFilled(state, payload, false);
    }
    default:
      return state;
  }
};

const Stars = () => {
  const [starState, setStarState] = useReducer(reducerFunction, initialState);

  const firstRef = createRef();
  const secondRef = createRef();
  const thirdRef = createRef();
  const fourthRef = createRef();
  const fifthRef = createRef();

  const registerEvents = () => {
    const unmountFirst = registerFirstStarEvents(
      firstRef,
      setStarState,
      reducerActions
    );
    const unmountSecond = registerSecondStarEvents(
      secondRef,
      setStarState,
      reducerActions
    );
    const unmountThird = registerThirdStarEvents(
      thirdRef,
      setStarState,
      reducerActions
    );
    const unmountFourth = registerFourthStarEvents(
      fourthRef,
      setStarState,
      reducerActions
    );
    const unmountFifth = registerFifthStarEvents(
      fifthRef,
      setStarState,
      reducerActions
    );

    return () => {
      unmountFirst();
      unmountSecond();
      unmountThird();
      unmountFourth();
      unmountFifth();
    };
  };

  useEffect(registerEvents, []);

  const onStarClicked = () => {
    const numberOfStars = [
      firstRef,
      secondRef,
      thirdRef,
      fourthRef,
      fifthRef,
    ].reduce((accumulator, ref) => {
      const { current } = ref;
      const { color } = getComputedStyle(current);
      if (color === 'rgb(255, 224, 53)') return accumulator + 1;
      return accumulator;
    }, 0);
    alert(`Thanks for your ${numberOfStars} star rating!`);
  };

  return (
    <Container>
      <Star
        ref={firstRef}
        size={STAR_SIZE}
        isFilled={starState.first.isFilled}
        onClick={onStarClicked}
      />
      <Star
        ref={secondRef}
        size={STAR_SIZE}
        isFilled={starState.second.isFilled}
        onClick={onStarClicked}
      />
      <Star
        ref={thirdRef}
        size={STAR_SIZE}
        isFilled={starState.third.isFilled}
        onClick={onStarClicked}
      />
      <Star
        ref={fourthRef}
        size={STAR_SIZE}
        isFilled={starState.fourth.isFilled}
        onClick={onStarClicked}
      />
      <Star
        ref={fifthRef}
        size={STAR_SIZE}
        isFilled={starState.fifth.isFilled}
        onClick={onStarClicked}
      />
    </Container>
  );
};

export default Stars;
