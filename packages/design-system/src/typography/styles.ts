import theme from '../theme';

const variants: Record<string, any> = theme.typography.styles;

export const getVariant = (variant: string) => {
  return variants[variant];
};
