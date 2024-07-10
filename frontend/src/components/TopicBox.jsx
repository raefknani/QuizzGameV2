import React from "react";
import { Link } from "react-router-dom";

function TopicBox({ to, image, label, topic }) {
  return (
    <Link to={to} state={topic}>
      <li className="topicBox">
        <img src={image} alt={label} />
        <p>{label}</p>
      </li>
    </Link>
  );
}

export default TopicBox;
