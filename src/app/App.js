import React from "react";
import { useState, useEffect, useRef } from "react";
import "./global/style/style.scss";
import { Layout } from "../layout/Layout";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { ListTopLine } from "../components/ListTopLine/ListTopLine";
import { Card } from "../components/Card/Card";
import { ListTask } from "../components/ListTask/ListTask";
import { ListBottomLine } from "../components/ListBottomLine/ListBottomLine";
import { Task } from "../components/Task/Task";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.reducerTasks.tasks);
  const [inputValue, setValue] = useState("");
  const [backGround, setBackGround] = useState("#FFF");
  const inputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem("savedTasksKey", JSON.stringify(tasks));
  }, [tasks]);

  const changeValue = (e) => setValue(e.target.value);

  const addTask = (e) => {
    e.preventDefault();
    inputRef.current.focus()
    if (inputValue === "") {
      setBackGround("rgba(255, 0, 0, 0.4)");
      setTimeout(() => setBackGround("#FFF"), 500);
    } else {
      const task = {
        id: new Date().toISOString(),
        text: inputValue,
        isDone: false,
        isEdit: false,
      };
      dispatch({ type: "ADD_TASK", payload: task });
      setValue("");
    }
  };

  const completeTask = (id) => dispatch({ type: "COMPLETE_TASK", payload: id });
  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });
  const deleteAll = () => dispatch({ type: "DELETE_ALL" });
  const deleteComplete = () => dispatch({ type: "DELETE_COMPLETE" });
  const editTask = (id) => dispatch({ type: "EDIT_TASK", payload: id });
  const editTextTask = (e, id) =>
    dispatch({ type: "EDIT_TEXT", payload: [e.target.value, id] });

  return (
    <>
      <Layout>
        <Header />
        <Hero>
          <Card>
            <ListTopLine
              value={inputValue}
              changeValue={changeValue}
              backGround={backGround}
              addTask={addTask}
              inputRef = {inputRef}
            />
            <ListTask className={"listTask"}>
              {tasks.map((item) => (
                <Task
                  key={item.id}
                  {...item}
                  completeTask={completeTask}
                  deleteTask={deleteTask}
                  editTask={editTask}
                  editTextTask={editTextTask}
                />
              ))}
            </ListTask>
            {tasks.length != 0 && (
              <ListBottomLine
                deleteComplete={deleteComplete}
                deleteAll={deleteAll}
              />
            )}
          </Card>
        </Hero>
      </Layout>
    </>
  );
}
export default App;
