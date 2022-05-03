import styled from '@emotion/styled';

import { Theme } from '../theme';

const RadioContainer = styled.div`
  label {
    position: relative;
    cursor: pointer;
    user-select: none;
  }

  label:before {
    content: '';
    appearance: none;
    background-color: transparent;
    border: 2px solid ${(props) => (props.theme as Theme).colors.neutral['06']};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0 -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 0.625rem;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 0.75rem;
    border-radius: 50%;
    transition: background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      border-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  label:hover::before {
    border-color: ${(props) =>
      (props.theme as Theme).colors.primary['01']['500']};
  }

  input:checked + label:after {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0.2875rem;
    left: 0.375rem;
    width: 0.75rem;
    height: 0.75rem;
    background-color: ${(props) =>
      (props.theme as Theme).colors.primary['01']['500']};
    border-radius: 50%;
  }
`;

export default RadioContainer;
