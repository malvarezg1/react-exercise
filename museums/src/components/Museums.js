import React, { useEffect, useState } from "react";
import MusemuDetail from "./MusumDetail";
var selectedMuseum = [];

function Museums() {
  const [data, setData] = useState([]);
  const [render, setRender] = useState(true);


  useEffect(() => {
    fetch("https://back-museums-uniandes.herokuapp.com/api/museums")
      .then((response) => response.json())
      .then((content) => {
        console.log(content);
        setData(content);
      });
  }, []);

  function renderMuseums(museum) {
      selectedMuseum=museum;
      setRender(false)
  }

  if(render === true) {
    return (
      <div>
        <div className="container">
        <div className="row">
            <p>Home &gt; Museos</p>
        </div>
          <div className="row text-center">
            <h2>Museums</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {data.map((museum) => {
              return (
                <div className=" col-1col-md-3 col-lg-3" key={museum.name}>
                  <div className="card" onClick={() => renderMuseums(museum)}>
                    <img
                      className="card-img-top"
                      src={museum.image}
                      alt={museum.image}
                    ></img>
                    <div className="card-body text-center">
                      <h5 className="card-title">{museum.name}</h5>
                      <p className="card-text">{museum.city}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  else{
    return(<MusemuDetail museum={selectedMuseum}/>)
    }
}

export default Museums;
