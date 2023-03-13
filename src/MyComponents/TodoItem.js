import React from "react";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="TodoItem">
      <p className="todotitle">{todo.title}</p>
      <p className="tododesc">{todo.desc}</p>
      <button
        className="btn btn-sm todoButton"
        onClick={() => {
          onDelete(todo);
        }}
      >
        <AssignmentTurnedInOutlinedIcon /> Done !
      </button>
    </div>
  );
};
