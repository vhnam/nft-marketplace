import styled from '@emotion/styled';
import { ReactNode } from 'react';
import {
  typography,
  TypographyProps as RootTypographyProps,
} from 'styled-system';

import { getVariant } from './styles';

interface TypographyProps extends RootTypographyProps {
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

const StyledTypography = styled.span<
  Omit<TypographyProps, 'children' | 'theme'>
>(({ variant = 'body1', ...props }) => {
  const { children, theme, ...componentProps } = props;
  return {
    ...typography(getVariant(variant)),
    ...componentProps,
  };
});

const Typography = ({ children, variant, ...props }: TypographyProps) => {
  return (
    <StyledTypography variant={variant} {...props}>
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  variant: 'body1',
};

export default Typography;
