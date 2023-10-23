import {FC} from 'react';
import styled from '@emotion/styled';
import {Input} from '@mui/material';

interface Props {
  type?: string;
  disableUnderline?: boolean;
}

const StyledInput = styled(Input)<Props>`
  width: 18vw;
  height: 6vh;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)';
  margin-bottom: 2rem;
  padding: 1.5rem;

  font-size: 1.5rem;

  &::before,
  &::after {
    display: none;
  }
`;

export const InputField: FC<Props> = ({type, disableUnderline}) => (
  <StyledInput type={type} disableUnderline={disableUnderline} />
);
