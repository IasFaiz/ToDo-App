import React from "react";

export const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-3"
      style={{
        background: "grey",
        color: "grey",
        height: "60px",
        opacity: "0.7",
      }}
    >
      <p
        className="text-center"
        style={{
          color: "#c5c5c5",
          margin: "0 auto",
          padding: "0px 0px",
          textAlign: "center",
        }}
      >
        Copyright &copy; MyTodoList.com by Faiz
      </p>
    </footer>
  );
};
