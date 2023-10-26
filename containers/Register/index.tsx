import {FC} from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';

import {FormControl} from '@mui/material';
import {CenteredForm, InputField, ButtonField, HeadField} from '@/components';

interface Props {}

const StyledAsterisk = styled.b`
  color: #00ff7f;
`;

export const Register: FC<Props> = () => {
  return (
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
        <ButtonField sx={{border: '1px solid #00FF7F'}}>코드 전송</ButtonField>
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
  );
};
