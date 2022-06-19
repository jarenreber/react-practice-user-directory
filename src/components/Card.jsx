import React, { useState } from "react";
import data from "../data";

const Card = (props) => {
  const [index, setIndex] = useState(0);
  const users = props.data.slice(0, data.length);
  const user = users[index];

  const previous = () => {
    setIndex(index - 1);
  };
  const next = () => {
    setIndex(index + 1);
  };

  return (
    <div>
      <div id="card">
        <div id="outOf">
          {index + 1}/{data.length}
        </div>
        <section id="info">
          <div>
            <h1 id="name">
              {user.nameBoth.first} {user.nameBoth.last}
            </h1>
            <div id="line"></div>
          </div>
          <h3 className="from">
            <p className="from">FROM:</p>
            {user.city}, {user.country}
          </h3>
          <h3>
            <p>Job Title:</p>
            {user.title}
          </h3>
          <h3>
            <p>Employer:</p>
            {user.employer}
          </h3>
          <h3>
            <p>Favorite Movies:</p>
            <ol>
              <li>{user.favoriteMovies[0]}</li>
              <li>{user.favoriteMovies[1]}</li>
              <li>{user.favoriteMovies[2]}</li>
            </ol>
          </h3>
        </section>
      </div>
      <section>
        {index === 0 ? (
          <button disabled type="submit" onClick={previous}>
            {"<"}Previous
          </button>
        ) : (
          <button type="submit" onClick={previous}>
            {"<"}Previous
          </button>
        )}

        {index === data.length - 1 ? (
          <button disabled type="submit" onClick={next}>
            Next{">"}
          </button>
        ) : (
          <button type="submit" onClick={next}>
            Next{">"}
          </button>
        )}
      </section>
    </div>
  );
};

export default Card;
