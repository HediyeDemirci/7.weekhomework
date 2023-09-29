const swissLicensePlateRegex = /^[A-Z]{2} \d{3} \d{3}$/;
const plate1 = "AG 124 234";
const plate2 = "ZH 783 499";

console.log(swissLicensePlateRegex.test(plate1)); 
console.log(swissLicensePlateRegex.test(plate2)); 

