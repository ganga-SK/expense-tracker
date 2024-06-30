import { Link } from "react-router-dom";
const EventList = ({events}) => {
    return ( 
        <div className="event-list" key="data.id">
            {events.map(event=>(
                <div className="event-preview" key={event.id}>
                    <Link to={`events/${events.id}`}>
                        <h2>{event.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default EventList;