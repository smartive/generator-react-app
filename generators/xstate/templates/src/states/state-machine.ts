import { Machine } from 'xstate/es';

import { Context, context } from './root-context';

export const stateMachine = Machine<Context>({
  context,
  id: 'Full',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } },
  },
  services: {},
});
