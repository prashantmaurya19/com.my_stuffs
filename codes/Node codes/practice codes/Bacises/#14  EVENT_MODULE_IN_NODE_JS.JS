/*
Event Module
Node.js has a built-in Module , called "Events"
where you can create-,fire- and listen for- you own events
*/

const EventEmitter = require("events");

const event = new EventEmitter();

//declearing the event
event.on("sayHellow",()=>{ 
    console.log('hellow sir');
});

event.on("sayHellow",()=>{ 
    console.log('hellow mam');
});

/*
always declear the event the befor emiting it

The concept is quite simple : emitter objects emit named events that cause
previosly reqistered listeners to be called . So, an emitter object
basically has two main features:
    Emitting name events.
    Registering and unregistering listener function
*/

event.emit('sayHellow'); //emiting event 









