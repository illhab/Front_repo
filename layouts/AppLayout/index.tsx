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

const drawerWidth = 240;

interface Props {
  useSideBar?: boolean;
  children: React.ReactNode;
}

export const AppLayout = ({useSideBar = true, children}: Props) => {
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
        <Toolbar>
          <div className="title">
            ILL<span>H</span>AB
          </div>
        </Toolbar>
      </AppBar>
      {useSideBar && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              color: '#fff',
              backgroundColor: theme => theme.palette.secondary.main,
            },
            ['& .MuiTypography-root']: {
              fontSize: '1.6rem',
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
        </Drawer>
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          minHeight: '100vh',
          backgroundColor: '#0e1115',
          color: '#fff',
          fontSize: '1.6rem',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
