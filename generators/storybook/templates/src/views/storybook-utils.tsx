import { color, select } from '@storybook/addon-knobs';
import { darken } from 'polished';
import React, { FC } from 'react';
import styled from 'styled-components';

import { Icon, IconName, IconSize } from './identity/icon';

const Title = styled.h1`
  color: #353b48;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0 0 0.8rem;
  padding: 0;
`;

const SwatchList = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
`;

const SwatchItem = styled.li`
  border: none;
  border-radius: 0.25rem;
  list-style: none;
  display: inline-flex;
  flex-direction: column;
  margin: 0 0.5rem 2rem;
  background: #f5f6fa;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Blur = styled.output<{ color: string; small?: boolean }>`
  display: inline-block;
  background: ${({ color }) => color};
  width: ${({ small }) => (small ? '2.5rem' : '15rem')};
  height: ${({ small }) => (small ? '2.5rem' : '9rem')};
  border-radius: ${({ small }) => (small ? '0.25rem' : '0.25rem 0.25rem 0 0')};
  border: 1px solid ${({ color }) => darken(0.1, color)};
`;

const Description = styled.dl`
  padding: 1rem 2rem;
  font-size: 0.875rem;
`;

const Key = styled.dt`
  color: #353b48;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

const Value = styled.dd`
  color: #2f3640;
  font-family: Roboto Mono, sans-serif;
  padding: 0;
  margin: 0 0 0.875rem;

  &:last-of-type {
    margin: 0;
  }
`;

const PaletteList = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0;
  list-style: none;
`;

const PaletteItem = styled.li`
  background: #efefef;
  border-bottom: 1px solid #fefefe;
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const Name = styled.strong`
  color: #353b48;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 4rem;
  flex: 1;
`;

const Variable = styled.var`
  color: #2f3640;
  font-family: Roboto Mono, sans-serif;
  font-style: normal;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const IconWrap = styled.div`
  background: #ffffff;
  fill: ${({ color }) => color};
  stroke: ${({ color }) => color};
  padding: 1rem;
  margin: 1rem;
  width: 7.5rem;
  text-align: center;
`;
type Color = {
  key: string;
  name: string;
  hex: string;
};

type SwatchProps = {
  title: string;
  colors: Record<string, Color>;
};

export const ColorSwatch: FC<SwatchProps> = ({ colors, title }) => {
  const palette = Object.keys(colors).map((key) => colors[key]);

  return (
    <>
      <Title>{title}</Title>
      <SwatchList>
        {palette.map(({ name, hex }) => (
          <SwatchItem>
            <Blur color={hex.toUpperCase()} />
            <Description>
              <Key>Name</Key>
              <Value>{name}</Value>
              <Key>HEX</Key>
              <Value>{hex.toUpperCase()}</Value>
            </Description>
          </SwatchItem>
        ))}
      </SwatchList>
    </>
  );
};

type PaletteProps = {
  title: string;
  colors: Color[];
};

export const ColorPalette: FC<PaletteProps> = ({ colors, title }) => (
  <>
    <Title>{title}</Title>
    <PaletteList>
      {colors.map(({ key, name, hex }) => (
        <PaletteItem key={key}>
          <Blur color={hex.toUpperCase()} small />
          <Name>
            {key} — {name}
          </Name>
          <Variable>{hex.toUpperCase()}</Variable>
        </PaletteItem>
      ))}
    </PaletteList>
  </>
);

type IconPinboardProps = {
  icons: IconName[];
};

const sizes = {
  'Extra Small': `${IconSize.xs}`,
  Small: `${IconSize.sm}`,
  Medium: `${IconSize.md}`,
  Large: `${IconSize.lg}`,
  'Extra Large': `${IconSize.xl}`,
};

export const IconPinboard: FC<IconPinboardProps> = ({ icons }) => (
  <Container>
    <SwatchList>
      {icons.map((name) => (
        <SwatchItem key={name}>
          <IconWrap color={color('Color', '#0097e6')}>
            <Icon name={name} size={select('Size', sizes, `${IconSize.lg}`) as any} />
          </IconWrap>
          <Description>
            <Key>Name</Key>
            <Value>{name}</Value>
          </Description>
        </SwatchItem>
      ))}
    </SwatchList>
  </Container>
);
