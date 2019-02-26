import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button: FC<Props> = ({ onClick, children }) => <button onClick={onClick}>{children}</button>;
