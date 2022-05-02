import theme from '../theme';

import { ButtonVariants } from './types';

export const getVariant = (variant: string) => {
  if (ButtonVariants.TERTIARY === variant) {
    return theme.button.variants.tertiary['variantLight'];
  }
  return theme.button.variants[variant];
};

export const getSize = (size: string) => {
  return theme.button.sizes[size];
};

export const setFullwidth = (isFullwidth: boolean) => {
  return isFullwidth
    ? {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }
    : {};
};
