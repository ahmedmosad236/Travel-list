import { useState } from "react";
import ListItem from "./ListItem";

function Listpacking({ items, checkbox, deleteItem, clearItems }) {
  const [sort, setSort] = useState("input");
  let sortitems;
  if (sort === "input") sortitems = items;
  if (sort === "description")
    sortitems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortitems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="packinglist">
      <ul>
        {sortitems.map((item) => (
          <ListItem
            item={item}
            key={item.id}
            checkbox={checkbox}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value={"input"}>Sort By INPUT ORDER</option>
          <option value={"description"}>Sort By DESCRIPTION</option>
          <option value={"packed"}>Sort By PACKED STATUS</option>
        </select>
        <button onClick={clearItems}>CLEAR LIST</button>
      </div>
    </div>
  );
}

export default Listpacking;
