import colors from '../foundations/colors';
import typography from '../foundations/typography';

const baseStyle = {
  ...typography.styles.button['01'],
  borderRadius: '5.625rem',
};

const sizeXSmall = {
  padding: '0.5rem 0.75rem',
};

const sizeSmall = {
  padding: '0.75rem 1rem',
};

const sizeMedium = {
  padding: '1rem 1.5rem',
};

const variantNeutral = {
  color: colors.neutral['08'],
  backgroundColor: colors.primary['01']['500'],
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: colors.primary['01']['600'],
  },
  '&:active': {
    backgroundColor: colors.primary['01']['700'],
  },
  '&:disabled': {
    backgroundColor: colors.primary['01']['700'],
    opacity: 0.5,
    cursor: 'default',
  },
};

const variantLight = {
  color: colors.neutral['02'],
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: `inset 0 0 0 0.125rem ${colors.neutral['06']}`,
  cursor: 'pointer',
  '&:hover': {
    color: colors.neutral['08'],
    backgroundColor: colors.neutral['02'],
    boxShadow: 'none',
  },
  '&:active': {
    color: colors.neutral['08'],
    backgroundColor: colors.neutral['01'],
    boxShadow: 'none',
  },
  '&:disabled': {
    color: colors.neutral['08'],
    backgroundColor: colors.neutral['02'],
    boxShadow: 'none',
    opacity: 0.5,
    cursor: 'default',
  },
};

const variantDark = {
  color: colors.neutral['08'],
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: `inset 0 0 0 0.125rem ${colors.neutral['04']}`,
  cursor: 'pointer',
  '&:hover': {
    color: colors.neutral['02'],
    backgroundColor: colors.neutral['08'],
    boxShadow: 'none',
  },
  '&:active': {
    color: colors.neutral['02'],
    backgroundColor: colors.white,
    boxShadow: 'none',
  },
  '&:disabled': {
    color: colors.neutral['02'],
    backgroundColor: colors.neutral['08'],
    boxShadow: 'none',
    opacity: 0.5,
    cursor: 'default',
  },
};

const sizes: Record<string, any> = {
  'x-small': sizeXSmall,
  small: sizeSmall,
  medium: sizeMedium,
};

const variants: Record<string, any> = {
  neutral: variantNeutral,
  tertiary: {
    variantDark,
    variantLight,
  },
};

export default {
  baseStyle,
  sizes,
  variants,
};
