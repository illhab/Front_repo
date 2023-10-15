import {FC} from 'react';
import styled from '@emotion/styled';
import {Container} from '@mui/material';

interface Props {
  children: React.ReactNode;
}

const StyledCentralizedContainer = styled(Container)`
  width: 30vw;
  height: 90vh;
  min-width: 27rem;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 8vh;
  padding-top: 9vh; // 90vh의 10%
  padding-bottom: 9vh; // 90vh의 10%

  border-radius: 20px;
  background-color: #20212d;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CenteredForm: FC<Props> = ({children}) => {
  return <StyledCentralizedContainer>{children}</StyledCentralizedContainer>;
};
