import {FC} from 'react';
import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import {FormControl} from '@mui/material';
import {CenteredForm} from '@/components';
import {InputField} from '../../components/InputField';
import {ButtonField} from '../../components/ButtonField';
import {HeadField} from '../../components/HeadField';

interface Props {}

const StyledAsterisk = styled.b`
  color: #00ff7f;
`;

export const Register: FC<Props> = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          backgroundColor: theme => theme.palette.secondary.main,
          color: '#fff',
          fontSize: '1.6rem',
          '.title': {
            fontWeight: 800,
            span: {
              color: theme => theme.palette.primary.main,
            },
          },
        }}
      >
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <div className="title">
            ILL<span>H</span>AB
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: '100vh',
          backgroundColor: '#0e1115',
          color: '#fff',
          fontSize: '1.6rem',
        }}
      >
        <CenteredForm>
          <Box
            sx={{
              textAlign: 'left',
              alignSelf: 'flex-start',
              marginLeft: '5vw',
              '.loginPrompt': {
                color: '#808080',
              },
            }}
          >
            <HeadField noMargin>회원가입</HeadField>
            <p className="loginPrompt">계정이 있으신가요? 로그인</p>
          </Box>
          <FormControl>
            <p>
              <StyledAsterisk>*</StyledAsterisk>이메일
            </p>
            <InputField disableUnderline={true} />
            <ButtonField outlined>코드 전송</ButtonField>
          </FormControl>
          <Box>
            <p>
              <StyledAsterisk>*</StyledAsterisk>비밀번호
            </p>
            <InputField disableUnderline={true} type="password" />
          </Box>

          <ButtonField variant="contained" color="primary" type="submit">
            다음
          </ButtonField>
        </CenteredForm>
      </Box>
    </Box>
  );
};
