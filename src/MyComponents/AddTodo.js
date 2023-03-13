import React, { useState } from "react";
import "./styles.css";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description can not be empty.");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div className="container my-3">
      <h3 className="addatodo">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="entries">
          <div className="mb-3 ">
            <label htmlFor="title " className="form-label entryItem">
              TO-DO Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control entryArea"
              id="title"
              aria-describedby="emailHelp"
              placeholder="Enter Todo Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc " className="form-label entryItem">
              TO-DO Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control entryArea"
              id="desc"
              placeholder="Enter Todo Description"
            />
          </div>
          <button
            type="submit"
            className="btn btn-sm btn-primary entryItemButton"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
