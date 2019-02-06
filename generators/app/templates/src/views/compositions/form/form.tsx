import React, { FC, FormEvent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const Form: FC<Props> = ({ onSubmit, children }) => <form onSubmit={onSubmit}>{children}</form>;
