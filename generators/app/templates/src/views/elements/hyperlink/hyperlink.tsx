import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string;
};

export const Hyperlink: FC<Props> = ({ href = '#', children }) => <a href={href}>{children}</a>;
