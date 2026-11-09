import { EventEmitter } from "events";

const shopEvents = new EventEmitter ();

shopEvents.once("Welcome", (user)=>{
    console.log(`Welcome to Avail, ${user.name}`);
    
});

shopEvents.once("Welcome", (user)=>{
    console.log(`Welcome to Avail, ${user.lastName}`);
    
});

const user ={
    name:"Damilare",
    lastName:"Kunle"
}


// const user2 ={
//     name:"Kunle"
// }


shopEvents.emit("Welcome", user)
shopEvents.emit("Welcome", user)
