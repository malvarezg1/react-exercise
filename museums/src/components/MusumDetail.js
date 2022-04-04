import React, { useEffect, useState } from "react";

function MusemuDetail(props) {
  return (
    <div>
        <div className="container">
        <div className="row">
            <p>Home &gt; Museos &gt; Obras principales</p>
        </div>
          <div className="row text-center">
            <h2>{props.museum.name + ": Obras Principales"}</h2>
        </div>
      </div>
      <div className="container">
        {props.museum.artworks.map((piece) => {
          return (
            <div className="row" key={piece.name}>
              <div className="col-lg-4 text-center">
                <img
                  src="https://source.unsplash.com/random/300x300?sig=1"
                  alt="Random"
                ></img>
                <p>{piece.name}</p>
              </div>
              <div className="col-lg-8">
                <p>{piece.description}</p>
                <p>{piece.type}</p>
                <p>{piece.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MusemuDetail;
