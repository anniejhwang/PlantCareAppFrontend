export function PlantsShow(props) {
  return (
    <div>
      <h1>Plant information</h1>
      <p>Name: {props.plant.common_name}</p>
      <p>Description: {props.plant.scientific_name}</p>
      <p>Type of Sunlight: {props.plant.sunlight}</p>
      <p>How often to water: {props.plant.watering} </p>
      <img src={props.plant.default_image.medium_url} />
    </div>
  );
}
