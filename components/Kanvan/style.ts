import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
`;

export const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #363743;
  min-width: 27rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const TaskColumnStyles = styled.div`
  width: 100%;
  min-height: 19rem;
  display: flex;
  gap: 1.2rem;
`;

export const Title = styled.span`
  color: #fff;
  align-self: flex-start;
  font-size: 1.6rem;
  font-weight: 800;
  margin: 2rem;
`;

export const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  min-height: 8.4rem;
  border-radius: 0.5rem;
  background: #20212d;
  box-shadow: 3px 5px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  gap: 0.7rem;

  .card-title {
    font-size: 1.6rem;
    font-weight: 800;
  }

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 800;
    color: #363743;

    .ticket-status {
      margin-right: 1rem;
    }

    .user-icon {
      background: #d9d9d9;
      border-radius: 100%;
      width: 3rem;
      height: 3rem;
      line-height: 3rem;
      text-align: center;
    }
  }
`;
