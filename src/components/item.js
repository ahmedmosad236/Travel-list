function Item({ item, DeleteItems, handelcheck }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => handelcheck(item.id)}
        />
      </span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => DeleteItems(item.id)}>❌</button>
    </li>
  );
}
export default Item;
