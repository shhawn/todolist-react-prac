import React, { useState } from 'react';

const List = ({
  id, data, setData, provided, snapshot, date, todo, removeList, modifyList
}) => {
  console.log('List Rerendering');

  const [isModify, setIsModify] = useState(false);
  const [modifyData, setModifyData] = useState(todo);

  const handleRemoveList = () => {
    removeList(id);
  };

  const handleModifyList = () => {
    modifyList(id, modifyData);
    setIsModify(!isModify);
  };

  const handleCancelModify = () => {
    setModifyData(todo);
    setIsModify(!isModify);
  };

  return (
    <div>
      <li key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={`${snapshot.isDragging ? 'bg-fff' : 'bg-fff'}`}>
        <p className="date">{date}</p>
        {!isModify ? (
          <div>
            <p className="todo">{todo}</p>
            <button type="button" className="modify" onClick={() => setIsModify(!isModify)}>
              수정
            </button>
            <button type="button" className="remove" onClick={handleRemoveList}>
              삭제
            </button>
          </div>
        ) : (
          <div>
            <textarea onChange={(e) => setModifyData(e.target.value)} value={modifyData} />
            <button type="button" className="success" onClick={handleModifyList}>
              수정완료
            </button>
            <button type="button" className="cancel" onClick={handleCancelModify}>
              수정취소
            </button>
          </div>
        )}
      </li>
    </div>
  );
};

export default List;