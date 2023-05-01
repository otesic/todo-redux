import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit } from "react-icons-kit/feather/edit";
import { handleCheckBox, removeTodo } from "../redux/todoapp/action";

const Todos = ({ handleEditClick, editFormVisibilty }) => {
  console.log(editFormVisibilty);
  const todos = useSelector((state) => state.operationReducer);
  const dispatch = useDispatch();
  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        {editFormVisibilty === false && (
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => dispatch(handleCheckBox(todo.id))}
          ></input>
        )}
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box">
        {editFormVisibilty === false && (
          <>
            <span>
              <Icon icon={edit} onClick={() => handleEditClick(todo)} />
            </span>
            <span>
              <Icon
                icon={trash}
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </span>
          </>
        )}
      </div>
    </div>
  ));
};
export default Todos;
