export function SchedulesIndex(props) {
  return (
    <div>
      <h1>My Schedules</h1>
      <div className="container overflow-hidden">
        <div className="row row-cols-3 row gx-5">
          {props.schedules.map((schedule) => (
            <div className="col-sm-6" key={schedule.id}>
              <div className="card-deck">
                <div className="card" style={{ width: "18rem" }} />
                <img src={schedule.url} className="card-img-top" alt="no image" />
                <div className="card-body">
                  <h2 className="card-title">{schedule.plant_id}</h2>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">User id: {schedule.user_id}</li>
                  <li className="list-group-item"> Watering Start Date: {schedule.watering_start_date} </li>
                </ul>
                <div className="card-body">
                  <a href="#" className="card-link">
                    {<button onClick={() => props.onShowSchedule(schedule)}>Edit Schedule</button>}
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
