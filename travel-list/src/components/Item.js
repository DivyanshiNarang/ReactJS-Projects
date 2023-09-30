export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      {/* onClick={onDeleteItem} will receive event but we want to pass id so we need to use callback function */}
      {/* onClick={onDeleteItem()} using this React will immediately call the function  */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
