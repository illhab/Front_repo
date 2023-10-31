import styled from '@emotion/styled';

import {Theme} from '@mui/material';

export const StyledContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  .left-box {
    width: 75%;
    .title-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4rem;
      input {
        :hover {
          background: #363743;
        }
        font-size: 2.8rem;
        background: #20212d;
        color: #fff;
        font-weight: 800;
        border: none;
        cursor: text;
      }
      .btn-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    .content-section {
      margin-bottom: 4rem;
      .btn-wrapper {
        margin: 1rem 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 0.5rem;
      }
      .content {
        :hover {
          background: #363743;
        }
      }
    }
    .comment-section {
      display: flex;
      gap: 2rem;
      margin-bottom: 4rem;
      .user-icon {
        width: 3.5rem;
        height: 3.5rem;
        line-height: 3.5rem;
        text-align: center;
        color: #000;
        font-size: 1.6rem;
        font-weight: 800;
        border-radius: 100%;
        background: #d9d9d9;
        cursor: pointer;
      }
      .comment-wrapper {
        width: 100%;
        input {
          width: 100%;
          height: 3.5rem;
        }
        .btn-wrapper {
          margin: 1rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
    .comment-list-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .user-comment-item {
        display: flex;
        gap: 2rem;
        .user-icon {
          width: 3.5rem;
          height: 3.5rem;
          line-height: 3.5rem;
          text-align: center;
          color: #000;
          font-size: 1.6rem;
          font-weight: 800;
          border-radius: 100%;
          background: #d9d9d9;
          cursor: pointer;
        }
        .user-info {
          display: flex;
          gap: 1rem;
          align-items: center;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
  .right-box {
    width: 25%;
    .ticket-info-section {
      width: 100%;
      min-height: 55rem;
    }
  }
`;

export const ButtonStyle = {
  fontSize: '1.2rem',
  fontWeight: 800,
};

export const CancelButtonStyle = {
  ...ButtonStyle,
  bgcolor: (theme: Theme) => theme.palette.warning.main,
  ':hover': {
    bgcolor: (theme: Theme) => theme.palette.warning.main,
    opacity: 0.8,
  },
};
