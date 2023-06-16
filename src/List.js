import React, { useState } from 'react';

const List = ({
  id, data, setData, provided, snapshot, date, todo
}) => {
  const [isModify, setIsModify] = useState(false);
  const [modifyData, setModifyData] = useState(todo);

  const removeList = (key) => {
    let removedData = data.filter((item) => item.seq !== key);
    setData(removedData);
  };

  const modifyList = (key) => {
    // 수정할 내용 작성
    let newData = data.map(item => item.seq === key ? {...item, do: modifyData} : item);
    setData(newData);
    setIsModify(!isModify);
  };

  return (
    <div>
      <li key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className={`${snapshot.isDragging ? "bg-fff" : "bg-fff"}`}>
        <p className="date">{date}</p>
        {!isModify ? (
          <p className="todo">{todo}</p>
        ) : (
          <textarea onChange={(e) => setModifyData(e.target.value)} value={modifyData}></textarea>
        )}
        {!isModify ? (
          <button
            type="button"
            className="modify"
            onClick={() => setIsModify(!isModify)}
          >
            수정
          </button>
        ) : (
          <button
            type="button"
            className="success"
            onClick={() => modifyList(id)}
          >
            수정완료
          </button>
        )}
        <button
          type="button"
          className="remove"
          onClick={() => removeList(id)}
        >
          삭제
        </button>
      </li>
    </div>
  );
};

export default List;