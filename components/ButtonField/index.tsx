import {FC} from 'react';
import styled from '@emotion/styled';
import {Button, ButtonProps} from '@mui/material';

interface StyledButtonProps extends ButtonProps {
  colorcode?: string;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  width: 18vw;
  height: 6vh;

  font-size: 1.6rem;
  font-weight: 800;

  margin-bottom: 1rem;

  ${props =>
    props.colorcode &&
    `
    background-color: ${props.colorcode} !important;
    &:hover {
      background-color: darken(${props.colorcode}, 10%) !important;
    }
  `}
`;

export const ButtonField: FC<StyledButtonProps> = ({children, ...props}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
