import React, { useState, useRef, useCallback } from 'react';

const Insert = React.memo(({ insertData }) => {
  console.log('Insert Rerendering');

  const [todo, setTodo] = useState();
  const todoInput = useRef();

  const insertTodo = (e) => {
    setTodo(e.target.value);
  }

  const dataSubmit = (e) => {
    e.preventDefault();
    insertData(todo);
    todoInput.current.value = '';
  };

  return (
    <div className="Insert">
      <h1>TODO LIST</h1>
      <form action="" onSubmit={dataSubmit}>
        <input type="text" placeholder="오늘의 할 일을 입력하세요." onChange={insertTodo} ref={todoInput} />
      </form>
    </div>
  )
})

export default Insert;