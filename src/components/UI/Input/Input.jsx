import React from "react";
import s from "./Input.module.scss";

export const Input = ({ changeValue, value, backGround, inputRef }) => {
  return (
    <input
      ref={inputRef}
      value={value}
      style={{ backgroundColor: backGround }}
      className={s.input}
      placeholder="Add task..."
      onChange={(e) => changeValue(e)}
    />
  );
};
