const helloWorld = (parameter1, parameter2 = "hello world") => parameter1 + parameter2;
const getWorld = helloWorld("Sourav ");
console.log(getWorld);