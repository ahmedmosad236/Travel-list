import { useState } from "react";

function Searchbar({ addNewItem }) {
  const [description, setDescreption] = useState("");
  const [quantity, setquantity] = useState(1);
  const handelSubmit = function (e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      id: new Date(),
      packed: false,
    };
    addNewItem(newItem);
    setDescreption("");
    setquantity(1);
  };
  return (
    <form onSubmit={handelSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(+e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescreption(e.target.value)}
      />
      <button className="add-btn">ADD</button>
    </form>
  );
}

export default Searchbar;
