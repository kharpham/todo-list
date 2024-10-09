import { useEffect, useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { DeleteItemContext, EditItemContext } from "./contexts/AppContext";

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState("");
  const persistData = (newList: string[]) => {
    localStorage.setItem('items', JSON.stringify({
      items: newList
    }));
  } 
  const handleAdd = (item: string) => {
    if (item) {
      const newList = [item, ...items];
      setItems(newList);
      persistData(newList);
    }
  };
  const handleDelete = (index: number) => {
    const newList = items.filter((_, itemIndex) => itemIndex !== index);
    setItems(newList);
    persistData(newList)
  };
  const handleEdit = (index: number) => {
    const item = items[index];
    setItem(item);
    handleDelete(index);
  };
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    const localItems = localStorage.getItem('items');
    if (!localItems) {
       return;
    }
    setItems(JSON.parse(localItems).items);
    
  }, [])

  return (
    <DeleteItemContext.Provider value={handleDelete}>
      <EditItemContext.Provider value={handleEdit}>
        <ToDoInput item={item} setItem={setItem} handle={handleAdd} />
        <ToDoList items={items} />
      </EditItemContext.Provider>
    </DeleteItemContext.Provider>
  );
};

export default App;
