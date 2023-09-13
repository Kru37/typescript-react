import React, { useState } from "react";

const GuestList: React.FC = () => {
    const [guest , setguest] = useState('')
  const [list, setList] = useState<string[]>([]);

  const addItem = () => {
   setList([...list , guest])
   setguest('')
  }
  return (
    <div>
        <h3>Guest List</h3>
      <ul>
        {list.map((item , index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <input type="text" onChange={(e) => setguest(e.target.value)} value={guest} />
      <button onClick={addItem}>Add Guest</button>
    </div>
  );
};

export default GuestList;
