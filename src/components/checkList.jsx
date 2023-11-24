import { useState } from "react";
import Item from "./item";

// eslint-disable-next-line react/prop-types
function CheckList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  const sortItems = () => {
    switch (sortBy) {
      case "title":
        // return [...items].sort((a, b) => a.title.localeCompare(b.title));
        return [...items].sort((a, b) =>
          (a.name || "ww").localeCompare(b.name || "aaa")
        );
      case "status":
        return [...items].sort((a, b) => Number(a.value) - Number(b.value));
      case "input":
      default:
        return items;
    }
  };

  const sortedItems = sortItems();

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan input</option>
          <option value="title">Urutkan berdasarkan judul</option>
          <option value="status">Urutkan berdasarkan status</option>
        </select>
        <button onClick={onClearItems}>Hapus</button>
      </div>
    </div>
  );
}

export default CheckList;
