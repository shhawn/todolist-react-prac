const List = ({ data, setData }) => {
  const removeList = (key) => {
    let removedData = data.filter(v => v.seq !== key);
    setData(removedData);
  }

  return (
    <div className="List">
      <ul>
        {data.map(v => (
            <li key={v.seq}>
              <p className="date">{v.date}</p>
              <p className="todo">{v.do}</p>
              <button 
                type="button" 
                className="remove" 
                onClick={() => removeList(v.seq)}>
                  삭제
              </button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default List;