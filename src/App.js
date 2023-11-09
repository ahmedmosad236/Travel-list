import { useState } from "react";
import Logo from "./components/logo";
import Form from "./components/form";
import Packinglist from "./components/packinglist";
import Footer from "./components/footer";

export default function App() {
  const [items, setitems] = useState([]);
  function handleAddItems(item) {
    console.log(item);
    setitems((items) => [...items, item]);
  }

  function handleDelete(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handelcheck(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    setitems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <Packinglist
        items={items}
        DeleteItems={handleDelete}
        handelcheck={handelcheck}
        handleClear={handleClear}
      />
      <Footer items={items} />
    </div>
  );
}
