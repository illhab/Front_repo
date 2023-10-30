import styled from '@emotion/styled';

import {Theme} from '@mui/material';

export const StyledContentWrapper = styled.div`
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
