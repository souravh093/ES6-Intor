const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'Silver',
    price: '4000',
    contact: '01303423332'
}

// const phone = fish.contact;
// const color = fish.color;
// const price = fish.price; 

const {age, name, address} = {
    name: 'Sourav halder',
    age: 24,
    profession: 'Student',
    address: 'Bangladesh'
}

console.log(age, name, address);

const {price} = fish;
const {color} = fish;
const {contact} = fish;
console.log("%c Condition block :: " + price, color, contact);