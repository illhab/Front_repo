import {FC} from 'react';
import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

import {Button} from '@mui/material';
import {FormControl} from '@mui/material';
import {CenteredForm} from '@/components';
import {InputField} from '../../components/InputField';
import {ButtonField} from '../../components/ButtonField';
import {HeadField} from '../../components/HeadField';

interface Props {}

const StyledAsterisk = styled.b`
  color: #00ff7f;
`;

export const LogIn: FC<Props> = () => {
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
          <Button variant="contained">계정 생성</Button>
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
          <Box>
            <HeadField>
              환영합니다.
              <br />
              당신을 기다리고 있었어요.
            </HeadField>
          </Box>
          <FormControl>
            <p>
              <StyledAsterisk>*</StyledAsterisk>이메일
            </p>
            <InputField disableUnderline={true} />
            <p>
              <StyledAsterisk>*</StyledAsterisk>비밀번호
            </p>
            <InputField disableUnderline={true} type="password" />
            <ButtonField variant="contained" color="primary" type="submit">
              로그인
            </ButtonField>
          </FormControl>

          <FormControl>
            <ButtonField variant="contained" colorcode="#FEEB00" type="submit">
              카카오로 시작하기
            </ButtonField>
            <ButtonField variant="contained" colorcode="#2DB400" type="submit">
              네이버로 시작하기
            </ButtonField>
            <ButtonField variant="contained" colorcode="#CB4F40" type="submit">
              구글로 시작하기
            </ButtonField>
          </FormControl>
        </CenteredForm>
      </Box>
    </Box>
  );
};
