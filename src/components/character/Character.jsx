import React from "react";

function Character({ id, name, status, image, nickname, portrayed }) {
  return (
    <div className="card">
      <div className="card-side card-front">
        <img src={image} alt="" />
      </div>
      <div className="card-side card-back">
        <h5>{name}</h5>
        <ul>
          <li>
            <strong>ID: </strong>
            {id}
          </li>
          <li>
            <strong>NickName: </strong>
            {nickname}
          </li>
          <li>
            <strong>Portrayed: </strong>
            {portrayed}
          </li>
          <li>
            <strong>Status: </strong>
            {status}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Character;
