type Color = {
  key: string;
  name: string;
  hex: string;
};

type PrimaryKey = 'highlight' | 'dark' | 'light';

export const primary: Record<PrimaryKey, Color> = {
  highlight: { key: 'highlight', name: 'Highlight', hex: '#009fe3' },
  dark: { key: 'dark', name: 'Dark', hex: '#1d314c' },
  light: { key: 'light', name: 'Light', hex: '#ffffff' },
};

type SignalKey = 'alarm' | 'success' | 'warning';

export const signals: Record<SignalKey, Color> = {
  alarm: { key: 'alarm', name: 'Alarm', hex: '#EF6461' },
  success: { key: 'success', name: 'Success', hex: '#40F99B' },
  warning: { key: 'warning', name: 'Warning', hex: '#FABC3C' },
};

export const neutral: Color[] = [
  { key: '0', name: 'White', hex: '#ffffff' },
  { key: '10', name: 'Icewind Dale', hex: '#e8eaed' },
  { key: '20', name: 'Sparkling Frost', hex: '#d2d6db' },
  { key: '30', name: 'Transformer', hex: '#a5adb7' },
  { key: '40', name: 'Trance', hex: '#8e98a6' },
  { key: '50', name: 'Stowaway', hex: '#788494' },
  { key: '60', name: 'Bluster Blue', hex: '#4a5b70' },
  { key: '70', name: 'Dark Denim', hex: '#33465e' },
  { key: '80', name: 'Rurikon Blue', hex: '#1d314c' },
  { key: '90', name: 'Yankees Blue', hex: '#172841' },
];
