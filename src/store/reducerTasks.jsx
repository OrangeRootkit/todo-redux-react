const defaultState = {
  tasks: JSON.parse(localStorage.getItem("savedTasksKey")) ?? [],
};

export const reducerTasks = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };

    case "DELETE_ALL":
      return { ...state, tasks: [] };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: [...state.tasks.filter((item) => item.id !== action.payload)],
      };

    case "COMPLETE_TASK":
      const newTasks = state.tasks;
      const tempTask = newTasks.find((task) => task.id == action.payload);
      tempTask.isDone = !tempTask.isDone;
      return { ...state, tasks: [...newTasks] };

    case "DELETE_COMPLETE":
      return {
        ...state,
        tasks: [...state.tasks.filter((el) => el.isDone !== true)],
      };

    case "EDIT_TASK":
      console.log(action.payload);
      const arrEdit = state.tasks;
      const editTask = arrEdit.find((task) => task.id == action.payload);
      editTask.isEdit = !editTask.isEdit;
      console.log(state.tasks);
      return { ...state, tasks: [...arrEdit] };

    case "EDIT_TEXT":
      const text = action.payload[0];
      const arrEditText = state.tasks;
      const editTaskText = arrEditText.find(
        (task) => task.id == action.payload[1]
      );
      editTaskText.text = text;

      return { ...state, tasks: [...arrEditText] };

    default:
      return state;
  }
};
