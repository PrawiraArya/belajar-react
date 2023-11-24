// eslint-disable-next-line react/prop-types
const Item = ({ item, onDeleteItem, onToggleItem }) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, value } = item;

  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(id)} />
      <span style={{ textDecoration: value && "line-through" }}>{name}</span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};

export default Item;
