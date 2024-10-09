

interface InputProps {
  handle: (item: string) => void;
  item: string;
  setItem: (item: string) => void;
}

const ToDoInput = ({handle, item, setItem}: InputProps) => {
  return (
    <header>
        <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
        <button onClick={() => {handle(item); setItem("");}}>Add</button>
    </header>
  )
}

export default ToDoInput