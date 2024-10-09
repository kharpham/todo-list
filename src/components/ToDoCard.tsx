import { ReactNode } from "react";
import { useDelete, useEdit } from "../contexts/AppContext";

interface CardProps {
  children: ReactNode;
  index: number;
}
const ToDoCard = ({ children, index }: CardProps) => {
  const handleDelete = useDelete();
  const handleEdit = useEdit();
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square" onClick={() => handleEdit(index)}></i>
        <i className="fa-regular fa-trash-can" onClick={() => {handleDelete(index);}}></i>
      </div>
    </li>
  );
};

export default ToDoCard;
