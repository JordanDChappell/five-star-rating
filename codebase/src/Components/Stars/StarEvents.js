const pattern = Math.floor(Math.random() * 3); // there are three different 'patterns' that can be applied on load

const createEventListeners = (ref, mouseEnterEvent, mouseLeaveEvent) => {
  if (!ref.current) return () => {};

  ref.current.addEventListener('mouseenter', mouseEnterEvent);
  ref.current.addEventListener('mouseleave', mouseLeaveEvent);

  return () => {
    if (!ref.current) return;
    ref.current.removeEventListener('mouseenter', mouseEnterEvent);
    ref.current.removeEventListener('mouseleave', mouseLeaveEvent);
  };
};

export const registerFirstStarEvents = (ref, reducer, actions) => {
  const mouseEnterEvent = () => {
    switch (pattern) {
      case 0:
        reducer({
          type: actions.SET_FILLED,
          payload: ['first', 'second', 'third', 'fourth', 'fifth'],
        });
        break;
      default:
        reducer({
          type: actions.SET_FILLED,
          payload: ['first'],
        });
        break;
    }
  };

  const mouseLeaveEvent = () => {
    switch (pattern) {
      case 0:
        reducer({
          type: actions.SET_UNFILLED,
          payload: ['first', 'second', 'third', 'fourth', 'fifth'],
        });
        break;
      default:
        reducer({
          type: actions.SET_UNFILLED,
          payload: ['first'],
        });
        break;
    }
  };

  return createEventListeners(ref, mouseEnterEvent, mouseLeaveEvent);
};

export const registerSecondStarEvents = (ref, reducer, actions) => {
  const mouseEnterEvent = () =>
    reducer({
      type: actions.SET_FILLED,
      payload: ['first', 'second'],
    });

  const mouseLeaveEvent = () =>
    reducer({
      type: actions.SET_UNFILLED,
      payload: ['first', 'second'],
    });

  return createEventListeners(ref, mouseEnterEvent, mouseLeaveEvent);
};

export const registerThirdStarEvents = (ref, reducer, actions) => {
  const mouseEnterEvent = () =>
    reducer({
      type: actions.SET_FILLED,
      payload: ['first', 'second', 'third'],
    });

  const mouseLeaveEvent = () =>
    reducer({
      type: actions.SET_UNFILLED,
      payload: ['first', 'second', 'third'],
    });

  return createEventListeners(ref, mouseEnterEvent, mouseLeaveEvent);
};

export const registerFourthStarEvents = (ref, reducer, actions) => {
  const mouseEnterEvent = () =>
    reducer({
      type: actions.SET_FILLED,
      payload: ['first', 'second', 'third', 'fourth'],
    });

  const mouseLeaveEvent = () =>
    reducer({
      type: actions.SET_UNFILLED,
      payload: ['first', 'second', 'third', 'fourth'],
    });

  return createEventListeners(ref, mouseEnterEvent, mouseLeaveEvent);
};

export const registerFifthStarEvents = (ref, reducer, actions) => {
  const mouseEnterEvent = () =>
    reducer({
      type: actions.SET_FILLED,
      payload: ['first', 'second', 'third', 'fourth', 'fifth'],
    });

  const mouseLeaveEvent = () =>
    reducer({
      type: actions.SET_UNFILLED,
      payload: ['first', 'second', 'third', 'fourth', 'fifth'],
    });

  return createEventListeners(ref, mouseEnterEvent, mouseLeaveEvent);
};
