import { useParams } from "react-router-dom";


const EventDetails = ({ events }) => {

    const { id } = useParams();

    if (!events) {
        return <div>Loading...</div>;
    }
    
    let event1;
    events.map(event=>{
        if(event.id===(id)){
            event1 = event;
            console.log(event1);
        }
    });

    

    let subevent = null;

    

    if(event1!==undefined && event1.subevent!==undefined && event1.subevent!==null){
        subevent=event1.subevent;
        console.log(subevent);
    }

    
    
    return ( 
        <div className="event-details">
            {event1 ? (
                    <>
                        <h2 className="event-detail-title">{event1.title}</h2>
                        
                        <div className="sub">
                        {subevent ? (subevent.map(subevent => (
                            <div className="sep-subs">{subevent.title}:  {subevent.expense}</div>))):(<div>No Subevents</div>)}
                        </div>
                    </>
                ):(<p>Event not found</p>)
            }
        </div>
     );
}
 
export default EventDetails;