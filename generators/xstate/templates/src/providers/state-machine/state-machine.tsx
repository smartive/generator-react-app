import React, { Component, createContext, ReactNode } from 'react';
import { EventObject, interpret, State } from 'xstate/es';
import { Interpreter } from 'xstate/es/interpreter';

import { Context } from '../../states/root-context';
import { stateMachine } from '../../states/state-machine';

type ProviderContext = {
  current: State<Context>;
  transition: (event: EventObject) => void;
};

type StateMachineProps = {
  children: (ctx: ProviderContext) => ReactNode;
};

type StateMachineState = {
  current: State<Context>;
};

const { Consumer, Provider } = createContext<ProviderContext>({
  current: stateMachine.initialState,
  transition: () => {},
});

export class StateMachine extends Component<StateMachineProps, StateMachineState> {
  public state: StateMachineState = { current: stateMachine.initialState };

  private service: Interpreter<Context> = interpret(stateMachine).onTransition((current: State<Context>) => {
    this.setState({ current });
  });

  public componentDidMount(): void {
    this.service.start();
  }

  public componentWillUnmount(): void {
    this.service.stop();
  }

  public render(): ReactNode {
    const { current } = this.state;
    const { children } = this.props;

    return (
      <Provider value={{ current, transition: this.service.send }}>
        {children({ current, transition: this.service.send })}
      </Provider>
    );
  }
}

export { Consumer as State };
