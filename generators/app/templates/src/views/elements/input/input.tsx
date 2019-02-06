import React, { FC, FormEvent, ReactNode } from 'react';

type Props = {
  type?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
};

export const Input: FC<Props> = ({ type = 'text', onChange }) => <input type={type} onChange={onChange} />;
