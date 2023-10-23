import styled from '@emotion/styled';

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  width: 90%;
  height: 95%;
  overflow: auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: black;
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  background-color: #e0e0e0;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d0d0d0;
  }
`;

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
