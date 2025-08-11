import React, { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
export default function VanDetails() {
  let params = useParams();
  let location = useLocation();
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setVan(data.vans);
      });
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>`Back to {type} vans`</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
