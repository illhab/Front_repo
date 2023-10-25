import React from 'react';

import styled from '@emotion/styled';

interface Props {
  title: string;
}

const Title = styled.div`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 800;
`;

export const PageTitle = (props: Props) => {
  const {title} = props;
  return <Title className="page-title">{title}</Title>;
};
