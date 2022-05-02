import styled from '@emotion/styled';

interface ButtonIconProps {
  position: 'left' | 'right';
}

const StyledButtonIcon = styled.span<ButtonIconProps>(({ position }) => ({
  marginInlineStart: 'right' === position ? '0.5rem' : 0,
  marginInlineEnd: 'left' === position ? '0.5rem' : 0,
}));

export default StyledButtonIcon;
