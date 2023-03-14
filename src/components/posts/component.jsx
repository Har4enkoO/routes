import React from "react";
import "./component.css";

export default function component(props) {
  return (
    <div className="post">
      <div className="header">
        <img src={props.author.photo} alt="logo" className="logo" />
        <div className="post-author">
          <div className="post-author-name">{props.author.name}</div>
          <div className="post-author-nickname">{props.author.nickname}</div>
          <div className="post-author-date">{props.date}</div>
        </div>
      </div>
      <div className="post-content">
        <div>{props.content}</div>
        <div>
          <img src={props.image} alt="RayImage" className="post-image" />
        </div>
      </div>
    </div>
  );
}
