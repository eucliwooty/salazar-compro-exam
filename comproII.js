// I. Working with JSON
const userData = '{"name": "Alice", "age": 25}';

const user = JSON.parse(userData);

user.country = "USA";

const updateUserData = JSON.stringify(user);

// II. Fetching Api Data
// A
fetch('https://api.weather.com/data')
    .then(response => response.json())
    .then(data => console.log(data.temperature))
    .catch(error => console.error(error));

// B
// 1. To get data from an API, use the GET method.
// 2. If the API can't find data, it returns status code 404.
// 3. To send data to an API, use the POST method.

// III. Working with Dates
const eventDate = new Date("2024-12-31");

const day = eventDate.getDay();

eventDate.setDate(eventDate.getDate() + 10);

const formattedDate = eventDate.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });

// IV. Drawing Graphics
// Task B
// 1. SVG graphics stay sharp when zoomed in? True
// 2. Canvas is better for complex games.

// VI. Object-Oriented Programming
// Task A
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    
    getInfo() {
        return `${this.brand}: ${this.year}`;
    }
}

// Task B
Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
};