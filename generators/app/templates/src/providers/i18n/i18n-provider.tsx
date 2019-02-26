import { format as dateFormat } from 'date-fns';
import i18next from 'i18next';
import React, { Component, ReactNode } from 'react';

type I18nProviderProps = {
  children: ReactNode;
  locale: string;
  locales: i18next.Resource;
  i18n: i18next.i18n;
};

export class I18nProvider extends Component<I18nProviderProps> {
  constructor(props: I18nProviderProps) {
    super(props);

    const { locale, locales, i18n } = props;
    const [lng] = locale.split('-');

    i18n.init({
      lng,
      debug: process.env.NODE_ENV === 'development',
      interpolation: {
        format: (value: any, format?: string) => {
          if (value instanceof Date) {
            return dateFormat(value, format, { locale: lng });
          }

          return value;
        },
      },
      resources: locales,
    });
  }

  public render(): React.ReactNode {
    return this.props.children;
  }
}
