import { useState } from "react";
import Header from "./components/Header";
import Listpacking from "./components/Listpacking";
import Searchbar from "./components/Searchbar";
import States from "./components/States";
import { useLocalStorageState } from "./hook/useLocalStorageState";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];
export default function App() {
  // const [items, setItems] = useState([]);
  const [items, setItems] = useLocalStorageState([], "items");

  const addNewItem = function (newItem) {
    setItems((items) => [...items, newItem]);
  };

  const checkbox = function (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const deleteItem = function (id) {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const clearItems = function () {
    setItems([]);
  };
  return (
    <div className="app">
      <Header />
      <Searchbar addNewItem={addNewItem} />
      <Listpacking
        items={items}
        checkbox={checkbox}
        deleteItem={deleteItem}
        clearItems={clearItems}
      />
      <States items={items} />
    </div>
  );
}
