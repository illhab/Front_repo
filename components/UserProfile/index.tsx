import {FC} from 'react';
import {Box} from '@mui/material';
import {Wrapper} from './style';

interface Props {
  type: string;
  assignee?: string;
  reporter?: string;
}

export const UserProfile: FC<Props> = ({type, assignee, reporter}) => {
  return (
    <Wrapper>
      <Box sx={{marginRight: '1.5rem'}}>
        <div className="user-wrapper">
          {type === 'assignee' ? (
            <div className="user-icon">{assignee}</div>
          ) : (
            <div className="user-icon">{reporter}</div>
          )}
        </div>
      </Box>
    </Wrapper>
  );
};
