import React from "react";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import s from "./ListTopLine.module.scss";

export const ListTopLine = ({ value, changeValue, backGround, addTask, inputRef }) => {
  return (
    <form className={s.input__wrapper}>
      <Input inputRef={inputRef} value={value} changeValue={changeValue} backGround={backGround} />
      <Button className={"btn_add"} text={"Add task"} handleButton={addTask} />
    </form>
  );
};
