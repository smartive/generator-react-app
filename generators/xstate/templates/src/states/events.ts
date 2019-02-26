import { EventObject } from 'xstate/es';

export const createEvent = <TEvent extends EventObject>(event: TEvent): TEvent => event;
