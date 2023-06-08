import React, { useState, useRef } from 'react';

import Insert from './Insert';
import List from './List';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  let index = useRef(0);
  const insertData = (todo) => {
    let info = {
      seq: index.current,
      do: todo,
      date: new Date().toLocaleString().replace(/-/g, '.')
    }
    setData([info, ...data]);
    index.current++;
    console.log(data);
  }

  return (
    <div className="App">
      <Insert insertData={insertData}/>
      <List data={data} setData={setData} />
    </div>
  );
}

export default App;
