import { useState } from "react";

export function PlantsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>All Plants</h1>
      <div className="container">
        Search Filter:{" "}
        <input
          type="text"
          value={searchFilter}
          onChange={(event) => {
            setSearchFilter(event.target.value);
          }}
        />
      </div>
      <div className="container overflow-hidden">
        <div className="row row-cols-3 row gx-5">
          {props.plants
            ?.filter((plant) => plant.common_name.toLowerCase().includes(searchFilter))
            .map((plant) => (
              <div className="card" style={{ width: "18rem" }} key={plant.id}>
                <div className="card-deck">
                  <img src={plant.default_image?.medium_url} className="card-img-top" alt="no image" />
                  <div className="card-body">
                    <h2 className="card-title">{plant.common_name}</h2>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cycle: {plant.cycle}</li>
                    <li className="list-group-item"> Scientific Name: {plant.scientific_name?.[0]} </li>
                    <li className="list-group-item"> Other Name: {plant.other_name?.[0]}</li>
                    <li className="list-group-item">Sunlight: {plant.sunlight[0]}</li>
                    <li className="list-group-item">Watering: {plant.watering}</li>
                  </ul>
                  <div className="card-body">
                    <a href="#" className="card-link">
                      {<button onClick={() => props.onShowPlant(plant)}>Add to Schedule</button>}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
