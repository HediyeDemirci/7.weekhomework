const str = 'strings are immutable in javascript';

const words = str.split(' ');
let capitalizedStr = '';

for (const word of words) {
  capitalizedStr += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
}

capitalizedStr = capitalizedStr.trim(); 

console.log(capitalizedStr);
