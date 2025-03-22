import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../stores/todo-item-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row Me-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger Me-button"
            onClick={() => deleteItem(todoName)}
          >
            <MdDelete></MdDelete>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
