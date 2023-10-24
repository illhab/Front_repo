import styled from '@emotion/styled';

export const ModalBackground = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const ModalContent = {
  backgroundColor: 'white',
  padding: '2rem',
  width: '70%',
  height: '80%',
  overflow: 'auto',
  borderRadius: '1rem',
  boxShadow: '0 1rem 2rem rgba(0, 0, 0, 0.2)',
  color: 'black',
};

export const Wrapper = styled.div`
  .user-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    .user-icon {
      width: 4.5rem;
      height: 4.5rem;
      line-height: 4.5rem;
      text-align: center;
      color: #000;
      font-size: 1.6rem;
      font-weight: 800;
      border-radius: 100%;
      background: #d9d9d9;
      cursor: pointer;

      :hover {
        outline: 2px solid #00ff7f;
      }
    }
  }
`;
