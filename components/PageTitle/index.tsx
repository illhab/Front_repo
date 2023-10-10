import styled from '@emotion/styled';

interface Props {
  title: string;
}

const Title = styled.div`
  color: #fff;
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 4rem;
`;

export const PageTitle = (props: Props) => {
  const {title} = props;
  return <Title>{title}</Title>;
};
