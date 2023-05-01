import Form from "./components/Form";
import Todos from "./components/Todos";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll } from "./redux/todoapp/action";
import { useState } from "react";

function App() {
  const [editFormVisibilty, setEditFormVisibilty] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const handleEditClick = (todo) => {
    setEditFormVisibilty(true);
    setEditTodo(todo);
  };

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);

  const cancelUpdate = () => {
    setEditFormVisibilty(false);
    // console.log("실행됨");
  };
  return (
    <div className="wrapper">
      <h1 className="text-center">리액트 Todo with Redux</h1>
      <Form
        editFormVisibilty={editFormVisibilty}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Todos
        handleEditClick={handleEditClick}
        editFormVisibilty={editFormVisibilty}
      />
      {todos.length > 0 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
