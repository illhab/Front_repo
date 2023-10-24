import {FC} from 'react';
import styled from '@emotion/styled';

import Box from '@mui/material/Box';

import {FormControl} from '@mui/material';
import {CenteredForm, InputField, ButtonField, HeadField} from '@/components';
import {AppLayout} from '@/layouts';

interface Props {}

const StyledAsterisk = styled.b`
  color: #00ff7f;
`;

interface Props {}

export const LogIn: FC<Props> = ({}) => {
  return (
    <AppLayout useSideBar={false} showSignUpButton={true}>
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
    </AppLayout>
  );
};
