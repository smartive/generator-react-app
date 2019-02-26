import React, { FC, ReactElement } from 'react';
import { matchesState, StateValue } from 'xstate';

import { MatchOnlyProps } from './match-only';

type SwitchProps = {
  current: StateValue;
  children: ReactElement<MatchOnlyProps> | ReactElement<MatchOnlyProps>[];
};

const isMatchElement = (element: any): element is ReactElement<MatchOnlyProps> =>
  React.isValidElement(element) && !!(element.props as MatchOnlyProps).state;

/**
 * Renders either a Component if one child matches the current state, or otherwise `null`.
 */
export const Switch: FC<SwitchProps> = ({ children, current }) => {
  const matchElements = React.Children.toArray(children).filter(isMatchElement);
  const element = matchElements.find((child) => {
    const {
      props: { state },
    } = child;

    const expected: StateValue[] = Array.isArray(state) ? state : [state];
    return expected.some((value) => matchesState(value, current) && React.isValidElement(child));
  });

  return !!element ? React.cloneElement(element) : null;
};
