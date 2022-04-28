// The forecast today is 293 Kelvin. Kelvin will stay constant, so I used const instead of var.
const kelvin = 293;

// Celsius is 273 degrees less than Kelvin.
var celsius = (kelvin - 273);

// Fahrenheit is determined by the equation F = C * (9/5) + 32.
var fahrenheit = (celsius * (9 / 5) + 32);

// When converting from Celsius to Fahrenheit, you often get a decimal number.
fahrenheit = (Math.floor(celsius * (9 / 5) + 32));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra practice, converting Celsius to Newton:
var newton = (Math.floor(celsius * (33/100)));

console.log(newton);
