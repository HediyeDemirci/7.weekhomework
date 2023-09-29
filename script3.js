const date = new Date(); 
const dayOfWeek = date.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
  console.log('Today is the weekend.');
} else {
  console.log('Today is not the weekend.');
}
