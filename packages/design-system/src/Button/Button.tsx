import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

import theme from '../theme';

import { getSize, getVariant } from './styles';
import { ButtonIcons, ButtonSizes, ButtonVariants } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: 'none' | 'left' | 'right';
  size?: 'x-small' | 'small' | 'medium';
  variant?: 'neutral' | 'tertiary';
}

const Button = styled.button<ButtonProps>(
  ({
    icon = ButtonIcons.NONE,
    size = ButtonSizes.MEDIUM,
    variant = ButtonVariants.NEUTRAL,
    ...props
  }) => ({
    ...props,
    ...theme.button.baseStyle,
    ...getSize(size),
    ...getVariant(variant),
  })
);

export default Button;
