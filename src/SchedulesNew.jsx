export function SchedulesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.append("plant_id", props.plant.id);
    props.onCreateSchedule(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Watering Start Date: type in year/month/date format <input name="watering_start_date" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create Schedule</button>
      </form>
    </div>
  );
}
