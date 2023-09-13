import  ReactDOM  from "react-dom";
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
import UserSearch from "./classes/UserSearch";
import EventComponent from "./events/EventComponent";

const users = [
    {name:'Sarah' , age :20},
    {name: 'Tina' , age: 45},
    {name: 'Piya' , age: 15}
]


const App = () => {
    return (
        <div>
            {/* <Parent/> */}
            {/* <GuestList/> */}
         
            {/* <EventComponent/> */}
           <UserSearch users={users} />
        </div>
    )
}

ReactDOM.render(<App/> , document.querySelector('#root'))