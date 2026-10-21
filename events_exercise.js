import { EventEmitter } from "events";

// Create an event emitter
const myEmitter = new EventEmitter();

// Listen for an event
myEmitter.on("greeting", ()=>{
    console.log("Hello! An event has occured.");
    
});

//Trigger the event
myEmitter.emit("greeting")