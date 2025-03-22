import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from './components/TodoItems';
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
// import { /*useState,*/ useReducer } from "react";
import TodoItemsContextProvider /*, {
  TodoItemsContext,
} */ from "./stores/todo-item-store";

// const todoItemsReducers = (currTodoItem, action) => {
//   let newTodoItems = currTodoItem;
//   if (action.type === "NEW_ITEM") {
//     newTodoItems = [
//       ...currTodoItem,
//       { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
//     ];
//   } else if (action.type === "DELETE_ITEM") {
//     newTodoItems = currTodoItem.filter(
//       (item) => item.name !== action.payload.itemName
//     );
//   }
//   return newTodoItems;
// };

function App() {
  //   // const [todoItems, setTodoItems] = useState([]);
  //   const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducers, []);

  //   // const handleNewItem = (iteName, itemDueDate) => {
  //   //   setTodoItems((currentValue) => {
  //   //     const newTodoItem = [
  //   //       ...currentValue,
  //   //       { name: iteName, dueDate: itemDueDate },
  //   //     ];
  //   //     return newTodoItem;
  //   //   });
  //   // };
  //   const addNewItem = (itemName, itemDueDate) => {
  //     const newItemAction = {
  //       type: "NEW_ITEM",
  //       payload: {
  //         itemName,
  //         itemDueDate,
  //       },
  //     };
  //     dispatchTodoItems(newItemAction);

  //     /* setTodoItems((currentValue) => [
  //       ...currentValue,
  //       { name: iteName, dueDate: itemDueDate },
  //     ]);*/
  //   };

  //   const deleteItem = (todoItemName) => {
  //     const deleteItemAction = {
  //       type: "DELETE_ITEM",
  //       payload: {
  //         itemName: todoItemName,
  //       },
  //     };
  //     dispatchTodoItems(deleteItemAction);

  //     /* const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
  //     setTodoItems(newTodoItem);*/
  //   };

  //   // const defaultTodoItems = [{ name: "Ghee", dueDate: "Today" }];

  return (
    /*<TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >*/
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
