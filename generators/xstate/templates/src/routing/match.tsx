import React, { FC, ReactNode } from 'react';
import { matchesState, StateValue } from 'xstate';

export type MatchProps = {
  children: ReactNode;
  state: StateValue | StateValue[];
  current: StateValue;
};

/**
 * Renders either a Component if the two provided states match, or otherwise `null`.
 */
export const Match: FC<MatchProps> = ({ children, state, current }) => {
  const expected: StateValue[] = Array.isArray(state) ? state : [state];
  return expected.some((value) => matchesState(value, current)) ? <>{children}</> : null;
};
