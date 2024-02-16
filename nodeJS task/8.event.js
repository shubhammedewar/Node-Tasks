const eventEmmiter = require('events');

const event = new eventEmmiter();

const message = function(channelName){
    console.log(`Thanks For Subscribing to ${channelName}`);
    
}

event.addListener("subh",message);
event.emit("subh","physicswallah");