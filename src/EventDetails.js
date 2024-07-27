import { useParams } from "react-router-dom";


const EventDetails = ({ events }) => {

    const { id } = useParams();

    if (!events) {
        return <div>Loading...</div>;
    }
    console.log(events);
    let event1;
    events.map(event=>{
        if(event.id===parseInt(id)){
            event1 = event;
        }
    });

    console.log(event1);

    const subevent=event1.subevent;
    
    return ( 
        <div className="event-details">
            {event1 ? (
                    <>
                        <h2 className="event-detail-title">{event1.title}</h2>
                        <div className="sub">
                        {subevent.map(subevent => (
                            <div className="sep-subs">{subevent.title}:  {subevent.expense}</div>))}
                        </div>
                    </>
                ):(<p>Event not found</p>)
            }
        </div>
     );
}
 
export default EventDetails;