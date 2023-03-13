import React from "react";
import "./styles.css";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";

export default function Header(props) {
  return (
    <div className="navbarr">
      <p className="title">
        <PlaylistAddCheckOutlinedIcon fontSize="large" /> {props.title}
      </p>
    </div>
  );
}
