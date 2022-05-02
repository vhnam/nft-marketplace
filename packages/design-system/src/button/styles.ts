import theme from '../theme';

import { ButtonVariants } from './types';

export const getVariant = (variant: string) => {
  if (ButtonVariants.TERTIARY === variant) {
    return theme.components.button.variants.tertiary['variantLight'];
  }
  return theme.components.button.variants[variant];
};

export const getSize = (size: string) => {
  return theme.components.button.sizes[size];
};

export const setFullwidth = (isFullwidth: boolean) => {
  return isFullwidth
    ? {
        justifyContent: 'center',
        width: '100%',
      }
    : {};
};
