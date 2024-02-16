const eventEmmiter = require('events')
const event = new  eventEmmiter()

const message = (name)=>{
    console.log(`Thanks for subscribing ${name}`);
}

 
event.addListener('utube',message)
console.log('Calling function before removing event');
event.emit('utube', 'John Doe');


event.removeListener('utube',message)
console.log('Calling function after removing event');
event.emit('utube', 'John Doe');