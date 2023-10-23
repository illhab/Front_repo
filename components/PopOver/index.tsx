import {FC, useState} from 'react';
import {Popover, Typography, Button, List, ListItem} from '@mui/material';
import {TaskStatus} from '@/enums';

interface Props {}

export const PopOver: FC<Props> = ({}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [currentTaskStatus, setCurrentTaskStatus] = useState<TaskStatus>(
    TaskStatus.TODO,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = (status: TaskStatus) => {
    setCurrentTaskStatus(status);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{marginBottom: '1rem'}}
      >
        <Typography sx={{fontWeight: 'bold', fontSize: '1.5rem'}}>
          {currentTaskStatus}
        </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <List>
          {Object.values(TaskStatus).map(status => (
            <ListItem
              button
              key={status}
              onClick={() => handleStatusChange(status)}
            >
              <Typography sx={{fontWeight: 'bold', fontSize: '1.5rem'}}>
                {status}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};
