import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Dashboard} from '@mui/icons-material';
import {styled} from '@mui/system';

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)`
  background-color: #20212d;
  color: #fff;
  font-size: 1.6rem;
  .title {
    font-weight: 800;
    .primary-color {
      color: #00ff7f;
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background-color: #20212d;
    color: #fff;
  }
  .MuiTypography-root {
    font-size: 1.6rem;
  }
`;

const StyledContent = styled(Box)`
  min-height: 100vh;
  background: #0e1115;
  color: #fff;
  font-size: 1.6rem;
`;

interface Props {
  useSideBar?: boolean;
  children: React.ReactNode;
}

export const AppLayout = ({useSideBar = true, children}: Props) => {
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <StyledAppBar
        position="fixed"
        sx={{zIndex: (theme: any) => theme.zIndex.drawer + 1}}
      >
        <Toolbar>
          <div className="title">
            ILL<span className="primary-color">H</span>AB
          </div>
        </Toolbar>
      </StyledAppBar>
      {useSideBar && (
        <StyledDrawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Box sx={{overflow: 'auto'}}>
            <List>
              {['보드'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Dashboard fontSize="large" style={{color: '#fff'}} />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </StyledDrawer>
      )}
      <StyledContent component="main" sx={{flexGrow: 1, p: 3}}>
        <Toolbar />
        {children}
      </StyledContent>
    </Box>
  );
};
