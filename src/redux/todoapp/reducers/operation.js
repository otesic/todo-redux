import {
  ADD_TODO,
  DELETE_ALL,
  REMOVE_TODO,
  UPDATE_CHECKBOX,
  UPDATE_TODO,
} from "../action";

const initialState = [
  { id: 1, todo: "todo익히기", completed: false },
  { id: 2, todo: "Redux익히기", completed: false },
  { id: 3, todo: "TS익히기", completed: true },
];

export const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TODO:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;

    case UPDATE_TODO:
      let data = action.payload;
      const updateArray = [];
      state.map((el) => {
        if (el.id === data.id) {
          el.id = data.id;
          el.todo = data.todo;
          el.completed = data.completed;
        }
        updateArray.push(el);
      });
      return updateArray;

    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((el) => {
        if (el.id === action.payload) {
          el.completed = !el.completed;
        }
        todoArray.push(el);
      });
      return todoArray;
    default:
      return state;
  }
};
