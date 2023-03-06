import React from "react";
import s from "./ListBottomLine.module.scss";
import { Button } from "../Button/Button";

export const ListBottomLine = ({ deleteComplete, deleteAll  }) => {


  return (
    <div className={s.delete_block}>
      <Button
        className={"btn_delComplete"}
        text={"Delete complete"}
        handleButton={deleteComplete}
      />
      <Button
        className={"btn_delAll"}
        text={"Delete all"}
        handleButton={deleteAll}
      />
    </div>
  );
};
