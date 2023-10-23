import {Draggable, Droppable} from '@hello-pangea/dnd';
import {ItemType} from '@/types';
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
      items: ItemType[];
    };
  }; // api 나오면 타입 수정
  isModalOpen: boolean;
  selectedItem: ItemType | null;
  setIsModalOpen: (value: boolean) => void;
  setSelectedItem: (item: ItemType | null) => void;
}

export const Kanvan = (props: Props) => {
  const {columns, isModalOpen, selectedItem, setIsModalOpen, setSelectedItem} =
    props;

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
                      setIsModalOpen={setIsModalOpen}
                      setSelectedItem={setSelectedItem}
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
  setIsModalOpen,
  setSelectedItem,
}: {
  item: ItemType;
  index: number;
  setIsModalOpen: (value: boolean) => void;
  setSelectedItem: (item: any) => void;
}) => {
  const handleCardClick = () => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation onClick={handleCardClick}>
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
