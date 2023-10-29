import styled from '@emotion/styled';

import {Theme} from '@mui/material';

export const StyledContentWrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
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
