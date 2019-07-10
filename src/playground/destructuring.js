/////////// OBJECT DESTRUCTURING

// const person = {
//     name: 'Michael',
//     age: 32,
//     location: {
//         city: 'Portland',
//         temp: 60
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${person.age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin' 
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);










// ARRAY destructuring

const address = ['4626 NE Garfield Ave', 'Portland', 'Oregon', '97211'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);




const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);