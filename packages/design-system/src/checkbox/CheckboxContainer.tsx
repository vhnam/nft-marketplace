import styled from '@emotion/styled';

import { Theme } from '../theme';

const CheckboxContainer = styled.div`
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
    padding: 0.5rem;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 0.75rem;
    border-radius: 0.25rem;
    transition: background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
      border-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  label:hover::before {
    border-color: ${(props) =>
      (props.theme as Theme).colors.primary['01']['500']};
  }

  input:checked + label:before {
    background-color: ${(props) =>
      (props.theme as Theme).colors.primary['01']['500']};
    border-color: ${(props) =>
      (props.theme as Theme).colors.primary['01']['500']};
  }

  input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 0.0625rem;
    left: 0.375rem;
    width: 0.375rem;
    height: 0.875rem;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0.75);
  }
`;

export default CheckboxContainer;
