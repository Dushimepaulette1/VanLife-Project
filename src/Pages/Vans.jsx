import { useState, useEffect } from "react";
import VanDetails from "./VanDetails";
import { Link, useSearchParams } from "react-router-dom";
export default function Vans() {
  let [searchParams, setSearchParams] = useSearchParams();
  let typeFilter = searchParams.get("type");
  let [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  let filteredElements = typeFilter
    ? vans.filter((char) => char.type === typeFilter)
    : vans;

  const vanElements = filteredElements.map((van) => (
    <Link
      to={van.id}
      state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
    >
      <div key={van.id} className="van-tile">
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </div>
    </Link>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevSearchParams) => {
      if (value === null) {
        prevSearchParams.delete(key);
      } else {
        prevSearchParams.set(key, value);
      }
      return prevSearchParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-filters">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-filter-button simple ${
            typeFilter === "simple" ? "active" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-filter-button luxury ${
            typeFilter === "luxury" ? "active" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-filter-button rugged ${
            typeFilter === "rugged" ? "active" : ""
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className="van-filter-button clear"
          >
            Clear Filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
