const date = new Date(); 
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const day = daysOfWeek[date.getDay()];
const month = months[date.getMonth()];

console.log(`Day is: ${day} - Month is: ${month}`);
