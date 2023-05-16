import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ItemList() {
  const [items, setItems] = useState([]);

  //Explain handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItemName = e.target.elements.itemName.value.trim();
    if (!newItemName) {
      return;
    }
    const newItem = {
      id: uuidv4(),
      name: newItemName
    };
    setItems([...items, newItem]);
    e.target.reset();
  };
  //The component should have a button to remove an item from the list.
  const handleRemoveItem = () => {};

  return (
    <div>
      <h1>Item List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">New Item:</label>
        <input type="text" id="itemName" name="itemName" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.id})
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
