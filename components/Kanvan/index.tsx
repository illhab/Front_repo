import {Draggable, Droppable} from '@hello-pangea/dnd';

import {ResponseTicket} from '@/modules';

import {
  TaskColumnStyles,
  TaskInformation,
  TaskList,
  Title,
  Wrapper,
} from './style';

interface Props {
  columns: {
    [key: string]: {
      title: string;
      items: ResponseTicket[];
    };
  }; // api 나오면 타입 수정
  onShowTicketDetailModal: (ticket: ResponseTicket) => void;
}

export const Kanvan = (props: Props) => {
  const {columns, onShowTicketDetailModal} = props;
  return (
    <Wrapper>
      <TaskColumnStyles>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided, snapshot) => (
                <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                  <Title>{column.title}</Title>
                  {column.items.map((item, index) => (
                    <TaskCard
                      item={item}
                      index={index}
                      key={item.id}
                      onShowTicketDetailModal={onShowTicketDetailModal}
                    />
                  ))}
                  {provided.placeholder}
                </TaskList>
              )}
            </Droppable>
          );
        })}
      </TaskColumnStyles>
    </Wrapper>
  );
};

const TaskCard = ({
  item,
  index,
  onShowTicketDetailModal,
}: {
  item: ResponseTicket;
  index: number;
  onShowTicketDetailModal: (ticket: ResponseTicket) => void;
}) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation onClick={() => onShowTicketDetailModal(item)}>
            <div className="card-title">{item.title}</div>
            <div className="secondary-details">
              <div className="ticket-info">
                <span className="ticket-status">상태아이콘</span>
                <span className="ticket-number">FRON-1</span>
              </div>
              <div className="user-icon">HJ</div>
            </div>
          </TaskInformation>
        </div>
      )}
    </Draggable>
  );
};
