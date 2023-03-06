import React from "react";
import "./Task.scss";
import pencil from "./images/pencil.svg";
import x from "./images/x.svg";
import yes from "./images/yes.svg";
import { clsx } from 'clsx';


export const Task = ({
  id,
  text,
  isDone,
  completeTask,
  deleteTask,
  editTask,
  editTextTask,
  isEdit,
}) => {

  return (
    <li className={'task__wrapper'}>
      <input
        type="checkbox"
        checked={isDone? true:false}
        className={'task__checkbox'}
        onChange={() => completeTask(id)}
      />
      <div className={'toggle__wrapper'}>
        <input
          type="text"

          className={isDone ? clsx('toggle__text_true', isEdit && '_edit-task-change') : clsx('toggle__text_false', isEdit && '_edit-task-change')}

          value={text}
          disabled={isEdit? false : true}
          onChange={(e) => editTextTask(e, id)}
        /> 

        <img
          className={'edit__task'}
          src={isEdit ? yes : pencil}
          alt="pencil"
          onClick={() => editTask(id)}
        />
        <img
          className={'toggle__x'}
          src={x}
          alt="delete"
          onClick={() => deleteTask(id)}
        />
      </div>
    </li>
  );
};
