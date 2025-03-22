import { /*useState,*/ useContext, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../stores/todo-item-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameEle = useRef();
  const dueDateEle = useRef();

  /*const handelNameChange = (event) => {
    setTodoName(event.target.value);
    noOfUpdates.current += 1;
  };
  const handelDateChange = (event) => {
    setDueDate(event.target.value);
    console.log(`noOfUpdates are: ${noOfUpdates.current}`);
  }; */

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameEle.current.value;
    const dueDate = dueDateEle.current.value;
    todoNameEle.current.value = "";
    dueDateEle.current.value = "";
    addNewItem(todoName, dueDate);
    console.log(`${todoName} due on ${dueDate}`);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row Me-row" onSubmit={handleAddButton}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameEle}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handelNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateEle}
            /* value={dueDate}
            onChange={handelDateChange} */
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success Me-button">
            <BiMessageAdd></BiMessageAdd>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
