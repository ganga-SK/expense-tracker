import useFetch from "./UseFetch";
import EventList from "./EventList";
const Home = () => {
    const {data:events} = useFetch("http://localhost:8000/events");
    return ( 
        <div className="home-content">
            {events && <EventList events = {events}/>}
        </div>
     );
}
 
export default Home;