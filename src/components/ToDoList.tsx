import ToDoCard from "./ToDoCard";

interface ListProps {
  items: string[];
}

const ToDoList = ({ items }: ListProps) => {
  return (
    <ul className="main">
      {items.map((item, index) => (
        <ToDoCard key={index} index={index}><p>{item}</p></ToDoCard>
      ))}
    </ul>
  );
};

export default ToDoList;
