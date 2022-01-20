import React from "react";
import Character from "../character/Character";
import Spinner from "../spinner/Spinner";

function Characters({ chars, isLoading }) {
  return isLoading ? (
    <Spinner>
      <img src={Spinner} alt="" />
    </Spinner>
  ) : (
    <div className="main">
      <div className="grid">
        {chars.map((char) => (
          <div key={char.char_id}>
            <Character
              id={char.char_id}
              name={char.name}
              status={char.status}
              image={char.img}
              nickname={char.nickname}
              portrayed={char.portrayed}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
