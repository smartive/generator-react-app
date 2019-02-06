import { FC } from 'react';

import collection from './collection';

export const allIconNames = Object.keys(collection);

export enum IconSize {
  xs = 16,
  sm = 32,
  md = 48,
  lg = 64,
  xl = 72,
}

export type IconName = keyof typeof collection;

export type IconProps = {
  name: IconName;
  className?: string;
  size?: IconSize;
};

export const Icon: FC<IconProps> = ({ name, className, size = IconSize.sm }) => {
  if (!collection[name]) {
    console.warn(`No Icon with name '${name}' found in collection.`);
    return null;
  }

  return collection[name](size, className);
};
