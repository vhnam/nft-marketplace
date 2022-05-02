import styled from '@emotion/styled';

import { Typography } from '../typography';

import CheckboxContainer from './CheckboxContainer';

interface CheckboxProps {
  label: string;
  id: string;
  selected?: boolean;
}

const StyledCheckbox = styled.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
`;

const Checkbox = ({ label, selected = false, id, ...props }: CheckboxProps) => (
  <CheckboxContainer>
    <StyledCheckbox
      type="checkbox"
      defaultChecked={selected}
      id={id}
      {...props}
    />
    <Typography as="label" htmlFor={id} variant="caption" fontWeight="bold">
      {label}
    </Typography>
  </CheckboxContainer>
);

Checkbox.defaultProps = {
  selected: false,
};

export default Checkbox;
