export type ColorDefinition = {
  key: string;
  name: string;
  hex: string;
};

export const blue: ColorDefinition[] = [
  { key: 'B10', name: 'Kodama White', hex: '#e5f5fc' },
  { key: 'B20', name: 'Frosty Day', hex: '#cbecfa' },
  { key: 'B40', name: 'Shiva Blue', hex: '#97d9f6' },
  { key: 'B60', name: 'Norfolk Sky', hex: '#61c4f0' },
  { key: 'B80', name: 'Lynx Screen Blue', hex: '#28b1eb' },
  { key: 'B100', name: 'Vanadyl Blue', hex: '#009fe3' },
  { key: 'B140', name: 'Blue Cola', hex: '#0085dc' },
  { key: 'B160', name: 'Wizard Blue', hex: '#0078d6' },
  { key: 'B180', name: 'Royal Navy Blue', hex: '#006bd2' },
];

export const neutral: ColorDefinition[] = [
  { key: 'N0', name: 'White', hex: '#ffffff' },
  { key: 'N10', name: 'Icewind Dale', hex: '#e8eaed' },
  { key: 'N20', name: 'Sparkling Frost', hex: '#d2d6db' },
  { key: 'N40', name: 'Transformer', hex: '#a5adb7' },
  { key: 'N50', name: 'Trance', hex: '#8e98a6' },
  { key: 'N60', name: 'Stowaway', hex: '#788494' },
  { key: 'N80', name: 'Bluster Blue', hex: '#4a5b70' },
  { key: 'N90', name: 'Dark Denim', hex: '#33465e' },
  { key: 'N100', name: 'Rurikon Blue', hex: '#1d314c' },
  { key: 'N120', name: 'Yankees Blue', hex: '#172841' },
];

export const primary: ColorDefinition[] = ['B100', 'N100', 'N0'].map((key) =>
  [...blue, ...neutral].find((color) => color.key === key),
);

export const createPalette = (palette: Record<string, string>, { key, hex }: ColorDefinition) => ({
  ...palette,
  [key]: hex,
});
