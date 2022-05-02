import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import theme from '../theme';

import StyledButtonIcon from './ButtonIcon';
import { getSize, getVariant, setFullwidth } from './styles';
import { ButtonSizes, ButtonVariants } from './types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 'x-small' | 'small' | 'medium';
  variant?: 'neutral' | 'tertiary';
}

const StyledButton = styled.button<ButtonProps>(
  ({
    fullWidth = false,
    size = ButtonSizes.MEDIUM,
    variant = ButtonVariants.NEUTRAL,
    ...props
  }) => {
    const { children, ...componentProps } = props;
    return {
      ...componentProps,
      ...theme.button.baseStyle,
      ...getSize(size),
      ...getVariant(variant),
      ...setFullwidth(fullWidth),
    };
  }
);

const Button = ({ children, leftIcon, rightIcon, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {leftIcon && (
        <StyledButtonIcon position="left">{leftIcon}</StyledButtonIcon>
      )}

      {children}
      {rightIcon && (
        <StyledButtonIcon position="right">{rightIcon}</StyledButtonIcon>
      )}
    </StyledButton>
  );
};

export default Button;
