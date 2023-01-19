/*functional block to add timestamp*/
// Code added here will be run once
// whenever the node is started.
var newMessage = JSON.parse(msg.payload);
newMessage.time = new Date();
msg.payload = JSON.stringify(newMessage);
console.log(msg);
return msg;

//Function 2 to check if message is late by 12s
//parse date from string
var time1 = context.get("time1") || null;
var incomingMsg = JSON.parse(msg.payload);
const time2 = new Date(incomingMsg.time);
var onTime = false;
if (time1==null || Math.abs(time2.getTime() - time1.getTime()) < 12000) {
    onTime = true;
}
incomingMsg.onTime=onTime;
msg.payload=JSON.stringify(incomingMsg);
context.set("time1",time2);
return msg;
