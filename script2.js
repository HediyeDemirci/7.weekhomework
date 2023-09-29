const namesArr = ["roronoa zoro", "vinsmoke sanji", "tony tony chopper", "gold roger"];

const initialsArr = [];

for (const name of namesArr) {
  const nameParts = name.split(' ');
  let initials = '';
  for (const part of nameParts) {
    initials += part.charAt(0).toUpperCase();
  }
  initialsArr.push(initials);
}

console.log(initialsArr);
