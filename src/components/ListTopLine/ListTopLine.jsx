import React from "react";
import { Input } from "../UI/Input/Input";
import { Button } from "../Button/Button";
import s from "./ListTopLine.module.scss";

export const ListTopLine = ({ value, changeValue, backGround, addTask }) => {
  return (
    <form className={s.input__wrapper}>
      <Input value={value} changeValue={changeValue} backGround={backGround} />
      <Button className={"btn_add"} text={"Add task"} handleButton={addTask} />
    </form>
  );
};
