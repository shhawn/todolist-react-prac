import React, { useState, useRef, useCallback } from 'react';

import Insert from './components/Insert';
import Lists from './components/Lists';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  let index = useRef(0);

  const insertData = useCallback(
    (todo) => {
      setData((prevData) => {
        let info = {
          seq: index.current,
          do: todo,
          date: new Date().toLocaleString().replace(/-/g, '.')
        };
        index.current++;
        return [info, ...prevData];
      });
    },
    []
  );

  const removeList = useCallback((key) => {
    let removedData = data.filter((item) => item.seq !== key);
    setData(removedData);
  }, [data]);

  const modifyList = useCallback((key, modifyData) => {
    let newData = data.map((item) => (item.seq === key ? { ...item, do: modifyData } : item));
    setData(newData);
  }, [data]);

  return (
    <div className="App">
      <Insert insertData={insertData}/>
      <Lists data={data} setData={setData} removeList={removeList} modifyList={modifyList} />
    </div>
  );
}

export default App;
