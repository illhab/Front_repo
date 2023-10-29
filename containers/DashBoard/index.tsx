import {useState} from 'react';

import {InputAdornment, OutlinedInput} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {DragDropContext, DropResult} from '@hello-pangea/dnd';

import {Kanvan, PageTitle} from '@/components';

import {dummyTicketData, dummyUsers} from '@/contants';

import {Wrapper} from './style';

import {ResponseTicket} from '@/modules';

import {TicketDetailModal} from '..';

interface Column {
  title: string;
  items: ResponseTicket[];
}

export const DashBoard = () => {
  const [columns, setColumns] = useState<{[key: string]: Column}>(
    dummyTicketData,
  );
  const [showTicketDetailModal, setShowTicketDetailModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<ResponseTicket>();

  const onCloseTicketDetailModal = () => {
    setShowTicketDetailModal(false);
    setSelectedTicket(undefined);
  };

  const onShowTicketDetailModal = (ticket: ResponseTicket) => {
    setSelectedTicket(ticket);
    setShowTicketDetailModal(true);
  };

  const onDragEnd = (
    result: DropResult,
    columns: {[key: string]: Column},
    setColumns: (value: {[key: string]: Column}) => void,
  ) => {
    if (!result.destination) return;
    console.log('onDragEnd###', result);
    const {source, destination} = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <Wrapper>
      <PageTitle title="FRON 보드" />
      <div className="search-wrapper">
        <OutlinedInput
          sx={{
            color: '#fff',
            fontSize: '1.6rem',
            borderRadius: '2px',
            outline: '3px solid #20212D',
            background: '#363743',
          }}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon
                sx={{
                  color: '#fff',
                  fontSize: '2.4rem',
                }}
              />
            </InputAdornment>
          }
        />
        <div className="user-wrapper">
          {dummyUsers.map(user => (
            <div className="user-icon" key={user.id}>
              {user.name}
            </div>
          ))}
          <div className="user-icon add-btn">+</div>
        </div>
      </div>
      <div className="kanban-wrapper">
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          <Kanvan
            columns={columns}
            onShowTicketDetailModal={onShowTicketDetailModal}
          />
        </DragDropContext>
      </div>
      <TicketDetailModal
        open={showTicketDetailModal}
        onClose={onCloseTicketDetailModal}
        selectedTicket={selectedTicket}
      />
    </Wrapper>
  );
};
