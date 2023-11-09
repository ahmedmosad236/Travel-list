import { useState } from "react";
import Item from "./item";

function Packinglist({ items, DeleteItems, handelcheck, handleClear }) {
  const [sortby, setSortby] = useState("input");
  let sortitems;

  if (sortby === "input") sortitems = items;
  if (sortby === "description")
    sortitems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sortitems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortitems.map((item) => (
          <Item
            item={item}
            key={item.id}
            DeleteItems={DeleteItems}
            handelcheck={handelcheck}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value={"input"}>sort by input</option>
          <option value={"description"}>sort by descreption</option>
          <option value={"packed"}>sort by packed</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}
export default Packinglist;
