export function SchedulesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSchedule(props.schedule.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroySchedule(props.schedule);
  };

  return (
    <div>
      <h1>Watering Schedule</h1>
      <p>User id: {props.schedule.user_id}</p>
      <p>Watering start date: {props.schedule.watering_start_date}</p>
      <img src={props.schedule.url} />
      <form onSubmit={handleSubmit}>
        <div>
          User id: <input defaultValue={props.schedule.user_id} name="user_id" type="text" />
        </div>
        <div>
          New Watering Start Date:
          <input defaultValue={props.schedule.watering_start_date} name="watering_start_date" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.schedule.image_url} name="image_url" type="text" />
        </div>
        <button type="submit">Update Schedule</button>
      </form>
      <button onClick={handleClick}>Destroy Schedule</button>
    </div>
  );
}
