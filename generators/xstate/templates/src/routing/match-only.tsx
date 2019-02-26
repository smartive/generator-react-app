import React, { FC, ReactNode } from 'react';
import { StateValue } from 'xstate';

export type MatchOnlyProps = {
  children: ReactNode;
  state: StateValue | StateValue[];
};

/**
 * This component can be used in combination with `<Switch />` as a possible match within the switch.
 */
export const MatchOnly: FC<MatchOnlyProps> = ({ children }) => <>{children}</>;
