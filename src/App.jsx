import "./App.css";
import Form from "./components/form";
import Check from "./components/checkList";
import Footer from "./components/stats";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);

  function handleAddItem(item) {
    setListItems((listItems) => [...listItems, item]);
  }
  function handleDeleteItem(id) {
    setListItems((listItems) =>
      listItems.filter((item) => {
        item.id !== id;
        console.log(item);
      })
    );
  }

  function handleToggleItem(id) {
    setListItems((listItems) => {
      return listItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      });
    });
  }

  function handleClearItems() {
    //bagian konfirmasi penghapusan
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) {
      setListItems([]);
    }
  }
  return (
    <>
      <div className="logo">📝 GoCheck ✅</div>
      {/* <Form /> */}
      <Form onAddItem={handleAddItem} />
      <Check
        items={listItems}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearItems}
      />
      <Footer />
    </>
  );
}

export default App;
