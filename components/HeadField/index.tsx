import {FC} from 'react';
import styled from '@emotion/styled';

interface Props {
  children: React.ReactNode;
  noMargin?: boolean;
}

const StyledHeading = styled.h2<Props>`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: ${props => (props.noMargin ? '0' : '2rem')};
`;

export const HeadField: FC<Props> = ({children, noMargin}) => {
  return <StyledHeading noMargin={noMargin}>{children}</StyledHeading>;
};
