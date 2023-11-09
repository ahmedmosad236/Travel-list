import { useState } from "react";

function Form({ handleAddItems }) {
  const [description, setDecs] = useState("");
  const [quantity, setquantity] = useState(1);

  function handle(e) {
    e.preventDefault();
    if (!description) return;
    const newdata = { description, quantity, packed: false, id: Date.now() };
    console.log(newdata);
    handleAddItems(newdata);
    setDecs("");
    setquantity(1);
  }
  return (
    <form className="add-form" onSubmit={handle}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setquantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDecs(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
export default Form;
