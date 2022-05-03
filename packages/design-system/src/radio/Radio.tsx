import styled from '@emotion/styled';

import { Typography } from '../typography';

import RadioContainer from './RadioContainer';

interface RadioProps {
  label: string;
  id: string;
  selected?: boolean;
}

const StyledRadio = styled.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
`;

const Radio = ({ label, selected = false, id, ...props }: RadioProps) => (
  <RadioContainer>
    <StyledRadio type="radio" defaultChecked={selected} id={id} {...props} />
    <Typography as="label" htmlFor={id} variant="caption" fontWeight="bold">
      {label}
    </Typography>
  </RadioContainer>
);

Radio.defaultProps = {
  selected: false,
};

export default Radio;
