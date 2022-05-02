import styled from '@emotion/styled';
import {
  CSSProperties,
  ElementType,
  LabelHTMLAttributes,
  ReactNode,
} from 'react';
import {
  color,
  typography,
  TypographyProps as RootTypographyProps,
} from 'styled-system';

import { getVariant } from './styles';

interface TypographyProps
  extends RootTypographyProps,
    Omit<CSSProperties, keyof RootTypographyProps | 'translate'> {
  as?: ElementType<any>;
  htmlFor?: string;
  children: ReactNode;
  variant?:
    | 'hero'
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'caption2'
    | 'hairline1'
    | 'hairline2'
    | 'button1'
    | 'button2';
}

const StyledTypography = styled.div<
  Omit<TypographyProps, 'as' | 'children' | 'theme'>
>(({ variant = 'body1', as, children, htmlFor, theme, ...props }) => ({
  ...typography(getVariant(variant)),
  ...color(props),
  ...props,
}));

const Typography = ({ children, variant, ...props }: TypographyProps) => {
  return (
    <StyledTypography variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  as: 'div',
  variant: 'body1',
};

export default Typography;
