import { useState } from "react";

const AddExpense = () => {

    const [subEvents,setSubEvents] = useState([]);

    const [title,setTitle] = useState('');
    const [maxbudget,setMaxbudget] = useState('');

    const handleSubEvents =()=>{
        setSubEvents([
            ...subEvents,
            { title:'',expense:'' }
        ]);
    };

    const handleSubEventChange =(index,field,value)=>{
        const newSubEvent = [...subEvents];
        newSubEvent[index][field] = value;
        setSubEvents(newSubEvent);
    };

    /*const handleSave =(index)=>{
        const subevent = subEvents[index];
        fetch('http://localhost:8000/events/subevent',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(subevent)
        })
    }*/

    const handleMainEvent =()=>{
        const event = {title,maxbudget,subevent:subEvents};
        fetch('http://localhost:8000/events',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(event)
        })
        .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success, e.g., update UI or show a message
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g., show an error message
    });
    }

    return(
        <div className="add-expense">
             <label htmlFor="title">Title:</label>
             <input 
                type="text" 
                id="title" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
             <label htmlFor="max-budget">Maximum Budget:</label>
             <input 
                type="number" 
                id="max-budget"
                value={maxbudget}
                onChange={(e)=>setMaxbudget(e.target.value)}
            />
            <button onClick={handleMainEvent}>Save Event</button>
             <button onClick={handleSubEvents}>Add SubEvent</button>

             {subEvents.map((subEvent,index)=>(
                <div className="sub-event" key={index}>
                    <label htmlFor="1">Title:</label>
                    <input 
                        type="text" 
                        id="1" 
                        value={subEvent.title} 
                        onChange={(e)=>handleSubEventChange(index,'title',e.target.value)}
                    />
                    <label htmlFor="2">Expense:</label>
                    <input 
                        type="number" 
                        id="2" 
                        value={subEvent.expense} 
                        onChange={(e)=>handleSubEventChange(index,'expense',e.target.value)}
                    />
                    <button>Delete</button>
                    
                </div>
             ))}

        </div>
    );
};


export default AddExpense;