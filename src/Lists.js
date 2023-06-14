import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import List from './List';

const Lists = ({ data, setData }) => {
  
  const handleEnd = (result) => {
    console.log(result);

    if (!result.destination) return;
    const newTodoData = [...data];
    
    // 1. 변경시키는 아이템을 배열에서 지워줍니다.
    // 2. return 값으로 지워진 아이템을 잡아줍니다.
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderItem을 insert 해줍니다.
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setData(newTodoData);
    
  }

  return (
    <div className="List">
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((v, i) => (
                <Draggable
                  key={v.seq}
                  draggableId={v.seq.toString()}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <List 
                      key={v.seq}
                      id={v.seq}
                      data={data}
                      date={v.date}
                      todo={v.do}
                      setData={setData}
                      provided={provided}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Lists;