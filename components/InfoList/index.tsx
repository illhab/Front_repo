import {FC, useState} from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Typography,
} from '@mui/material';
import {ExpandLess, ExpandMore} from '@mui/icons-material';

import {InfoListDetail} from '@/enums';
import {dummyUsers} from '@/contants';

import {Wrapper} from './style';

interface Props {
  assigneeName?: string;
  reporterName?: string;
}

export const InfoList: FC<Props> = ({assigneeName, reporterName}) => {
  const [open, setOpen] = useState(true);
  const detailContents: Record<InfoListDetail, JSX.Element> = {
    [InfoListDetail.ASSIGNEE]: (
      <ListItemButton>
        <div className="user-wrapper">
          <div className="user-icon">{assigneeName}</div>
          {assigneeName}
        </div>
      </ListItemButton>
    ),
    [InfoListDetail.LABEL]: <ListItemButton>없음</ListItemButton>,
    [InfoListDetail.FIX_VERSION]: <ListItemButton>없음</ListItemButton>,
    [InfoListDetail.DEV]: (
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <ListItemButton>브랜치 만들기</ListItemButton>
        <ListItemButton>커밋 만들기</ListItemButton>
      </Box>
    ),
    [InfoListDetail.RELEASE]: <ListItemButton>배포 추가</ListItemButton>,
    [InfoListDetail.REPORTER]: (
      <ListItemButton>
        <div className="user-wrapper">
          <div className="user-icon">{reporterName}</div>
          {reporterName}
        </div>
      </ListItemButton>
    ),
  };

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Wrapper>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          border: '1px solid #e0e0e0',
          padding: '0px',
          marginBottom: '1rem',
        }}
      >
        <ListItemButton onClick={handleClick} sx={{bgcolor: '#e0e0e0'}}>
          <ListItemText
            primary="세부 정보"
            sx={{
              '.MuiTypography-root': {
                fontWeight: 'bold',
                fontSize: '1.5rem',
              },
            }}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div">
            {Object.values(InfoListDetail).map((info, index) => (
              <Box
                key={index}
                sx={{display: 'flex', width: '100%', alignItems: 'flex-start'}}
              >
                <Box
                  sx={{
                    flex: '1 1 33%',
                    height: info === InfoListDetail.DEV ? '2em' : '1em',
                  }}
                >
                  <ListItemText
                    primary={info}
                    sx={{
                      '.MuiTypography-root': {
                        fontSize: '1.5rem',
                      },
                      marginLeft: '1rem',
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    flex: '2 2 66%',
                    '.MuiTypography-root': {
                      fontSize: '1.5rem',
                    },
                  }}
                >
                  <Typography>{detailContents[info]}</Typography>
                </Box>
              </Box>
            ))}
          </List>
        </Collapse>
      </List>
    </Wrapper>
  );
};
