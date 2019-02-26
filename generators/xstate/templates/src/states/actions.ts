import produce from 'immer';
import { actions, EventObject } from 'xstate/es';

import { Context } from './root-context';

const { assign } = actions;

interface UpdateFooEvent extends EventObject {
  foo: string;
}

export const updateFoo = assign((context: Context, event: UpdateFooEvent) =>
  produce(context, (draft) => {
    draft.foo = event.foo;
  }),
);
