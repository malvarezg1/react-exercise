import React, { useEffect, useState } from "react";

function MusemuDetail(props) {
  return (
    <div>
        <div className="container">
        <div className="row">
            <p>Home &gt; Museos &gt; Obras principales</p>
        </div>
          <div className="row text-center">
            <h2>{"MUSEO "+props.museum.name + ": Obras Principales"}</h2>
            <hr></hr>
        </div>
      </div>
      <div className="container">
        {props.museum.artworks.map((piece) => {
          return (
            <div className="row" key={piece.name}>
              <div className="col-lg-3 text-center">
                <div className = "card"> 
                  <img id = "ImagenCard2"
                    src="https://source.unsplash.com/random/300x300?sig=1"
                    alt="Random"
                  ></img>
                  <p>{piece.name}</p>
                </div>
              </div>
              <div className="col-lg-9">
                <div className = "card d-block">
                  <div className= "cadrContent card-body">
                    <p>{piece.description}</p>
                    <p>{piece.type}</p>
                    <p>{piece.year}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MusemuDetail;
