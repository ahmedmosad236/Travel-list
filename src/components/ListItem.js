function ListItem({ item, checkbox, deleteItem }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => checkbox(item.id)}
        />
      </span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
}

export default ListItem;
