import { EventEmitter } from "events"

//1. Create event manager

const orderEvents = new EventEmitter();

//2. Register a listener for custmoer confirmations
orderEvents.on("orderPlaced", (order)=>{
    console.log(`Confirmation prepared for ${order.customer}`);
    
});

//3. Register a listener for the shop owner
orderEvents.on("orderPlaced", (order) =>{
    console.log(`New order recieved: ${order.item}`);
    
})

//4. Register a listener for activity logging
orderEvents.on("orderPlaced", (order)=>{
    console.log(`Order ${order.id} recorded in activity log`);
})

// 5. Simulate a customer order
const order = {
    id: 101,
    customer: "Damilare",
    item: "Adire Shirt",
    amount: 15000
};

// 6. Announce that the order has been placed
orderEvents.emit("orderPlaced", order);