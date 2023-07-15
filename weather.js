//Creating a variable
const kelvin = 293;
//Now were goint to name a new variable called celsius and subtract it from kelvin to convert kelvin to celsius..
const celsius = kelvin - 293;
// Now were converting celsius to fahrenheit with the code below

let fahrenheit = celsius * (9/5) + 32;
//converting fahrenheit to celsuis will end decimal to do this properly we need to wrap it in Math.floor()
fahrenheit = Math.floor(fahrenheit);
 
 console.log('The temperature is' + " " + fahrenheit + " " + "degrees Fahrenheit")