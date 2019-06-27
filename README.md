# JavaScript-ES6_Introduction
Introduction to ES6 using Node and Webpack.<br>
It is based in a [Udemy](https://www.udemy.com/) course.

<div align="center">

![Essentials in JavaScript ES6 - A Fun Clear Introduction](courseIcon.png)<br>
 [Essentials in JavaScript ES6 - A Fun Clear Introduction](https://www.udemy.com/essentials-in-javascript-es6/) for David Joseph Katz.

 </div>

## Table of contents
- [JavaScript-ES6_Introduction](#JavaScript-ES6Introduction)
  - [Table of contents](#Table-of-contents)
  - [What is new in ES6?](#What-is-new-in-ES6)
  - [Tools](#Tools)
- [1. Project Configuration](#1-Project-Configuration)
  - [1.1. Set up Project Webpack 4](#11-Set-up-Project-Webpack-4)
  - [1.2. Configure Webpack and Development Server](#12-Configure-Webpack-and-Development-Server)
  - [1.3. Set up Babel with Webpack](#13-Set-up-Babel-with-Webpack)
- [2. Coding New ES6 Syntax](#2-Coding-New-ES6-Syntax)
  - [2.1. Declare variables and scope](#21-Declare-variables-and-scope)
  - [2.2. Declare constants](#22-Declare-constants)
  - [2.3. Template Literals/Strings](#23-Template-LiteralsStrings)
- [3 Operating and Destructuring](#3-Operating-and-Destructuring)
  - [3.1. Destructuring assignament - Arrays](#31-Destructuring-assignament---Arrays)
  - [3.2. Destructuring assignament - Objects](#32-Destructuring-assignament---Objects)
- [4. Functions and Methods](#4-Functions-and-Methods)
  - [4.1. Arrow Functions](#41-Arrow-Functions)
  - [4.2. Arrow Function ignoring **this**](#42-Arrow-Function-ignoring-this)
  - [4.3. Map Method - mapping in ES6](#43-Map-Method---mapping-in-ES6)
  - [4.4. Filter Method - filtering in ES6](#44-Filter-Method---filtering-in-ES6)
- [5. Modules in ES6](#5-Modules-in-ES6)
  - [5.1. Exporting variables/constants](#51-Exporting-variablesconstants)
  - [5.2. Exporting data/functions](#52-Exporting-datafunctions)
- [6. Classes in ES6](#6-Classes-in-ES6)
  - [6.1. Classes set up](#61-Classes-set-up)
  - [6.1. Classes inheritance](#61-Classes-inheritance)
- [7. Extending Upon ES6 with React](#7-Extending-Upon-ES6-with-React)
  - [7.1. JSX in ES6](#71-JSX-in-ES6)
  - [7.2. Promises](#72-Promises)
- [NOTES](#NOTES)

## What is new in ES6?
- Syntax and features
- Classes, modules, array and object manipulation

## Tools
- Node: Install or use portable version setting Node path into "path" environment variable. With node we can use node package manager (npm) to install dependencies.
  ``` command
  node -v                    ... To show the Node version
  npm -v                     ... To show the Node Package Manager version
  npm install npm@latest -g  ... To install the newest npm update
  ```

- Babel: A transpiler reads code written in one language and produces the equivalent code in another. Browsers only currently have widespread support of older JS. Transpiler convert advanced TypeScript and CoffeScript code back into the original JS. Transpiles ES6 back into the supported pre ES6 JS. Babel is a JavaScript compiler.
 - Webpack: It is a npm, It allows us to run in an environment that hosts VAP. The benefist:
    - It bundles modules into one .js file    
    - Comes with a dev-server


# 1. Project Configuration
## 1.1. Set up Project Webpack 4
- The package.json vs package-lock.json
    ``` command
    npm init -y ..... Creates the package.json (initialize the project)
    npm install ..... Install all dependencies defined into package.json file
    ```
- The package-lock.json file stores the project dependencies.
- For install webpack dependencies (webpack and webpack command line), execute the next command:
    ``` command
    npm i webpack@4.12.0 webpack-cli@3.0.3 --save--dev ..... install webpack and webpack-cli and save them for develop environment  
    ```
- For execute scripts into package.json use npm command like "npm run start" or "npm run build". This command will execute the commands relationship with the script name "start" or "build".
    ```` command
    npm run start ..... execute "webpack --mode development", this command will create a "dist" folder and main.js file
    npm run build ..... will do the same that start, but the main.js file will be minimized because the mode will be "production"
    ````
## 1.2. Configure Webpack and Development Server
Webpack let export the application like bundle. For it is necessary configure the "webpack.config.js" file. to define the module export. <br>
````javascript
// inside webpack.config.js
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'app'), //where is the javasript files, dirname is necesary because must be a absolute path
    output:{ //where is the bundle output files
        path: path.resolve(__dirname, 'build'), //must be absolute path,  dirname is necesary because must be a absolute path
        filename: 'bundle.js'
    },
    devServer:{
        port: 3000,
        contentBase: path.resolve(__dirname, 'build') //where is the files to deploy
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
        ]
    }
};
````
With the bundle funcionality will get the "build" folder with "bundle.js" and not need anymore the "dist" folder.
Is necessary install a webpack server to test the application. For this:
```` command
npm i webpack-dev-server@3.1.4 --save-dev ..... to install a webpack development server
````
Now is necessary change the "start" script inside package.json to "webpack-dev-server --module development".
Is necessary too add a new key "devServer" into webpack.config.js to define the devlopment server features. In may case I've renamed the scripts: "start" for develop in local server, and "buildDev" and "buildProd" for release code.
After add the new key, when the command "npm run start" application will be deployed and the server will be run.
With the server run, the changes into "index.js" (file into app folder) can be shown inmeidately in the browser.
The package.json will be:
````json
// inside package.json
{
  "name": "es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "buildDev": "webpack --mode development",
    "buildProd": "webpack --mode production"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "webpack": "^4.12.0",
    "webpack-cli": "^3.0.3"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "webpack-dev-server": "^3.1.4"
  }
}
````

## 1.3. Set up Babel with Webpack
The main job of Babel is transfer all moder javascript ES6 to ES5. ES5 is fully supported on all browsers. <br>
Is necessary add three new dependencies related to configuring Babel:
````command
npm i babel-core@6.26.3 babel-loader@7.1.4 babel-preset-env@1.7.0 --save-dev ..... install the Babel core, loader y preset environment
````
Babel must be configured into "webpack.config.js" file, add a new key for this "module". But is necessary a extra configuration, for this create a new file ".babelrc".
````json
// inside .babelrc
{
    "presets": ["env"]
}
````


# 2. Coding New ES6 Syntax
## 2.1. Declare variables and scope
Exist 2 ways for declare variables in JavaScript:
- Using "var" for function scope
- Using "let" for block scope
In ES6 "let" keyword is used instead of "var". The "var" keyword can be used for global application variables.
````javascript
var name = 'John Snow';
let a = 'hello';
console.log('Before block: '+a+' '+name); //show hello

{
    console.log(a) //a variable doen't exist in this scope (undefined)
    var name = 'Ned Stark';
    let a = 'bye';
    console.log('Inside block: '+a+' '+name); //show bye
    let b = 1000
}

console.log('After block:'+a+' '+name); //show hello
console.log(b); //show a ERROR because the variable let exist only in the block (undefined)
````

## 2.2. Declare constants
In JavaScript a constant is declared with "const" keyword. The constant will be the reference to the variable, it is clarified in array example.
````javascript
const DATA = 2;
console.log('This is a constant: '+DATA)
//DATA = 3*4; //show a ERROR no catcheable, DATA is read-only
const ARRAY = [1,2,3]
console.log(ARRAY);
ARRAY.push(4);
console.log(ARRAY); //the array can be modified but ARRAY constant doesn't have another value (can't be reassigned)
//ARRAY = [1]; //show a ERROR no catcheable, ARRAY is read-only
````

## 2.3. Template Literals/Strings
In ES6 is possible optimized concatenation using templates. It is used like regular expressio, they have surrounding backticks `` with interpolated ${} symbols for variables.
````javascript
var greeting = 'hello';
var name = 'world';
var message_01 = greeting+' '+name;
console.log(message_01);

let message_02 = `${greeting} ${name}`; //ES6 template for literals/strings
console.log(message_02);
````

# 3 Operating and Destructuring
## 3.1. Destructuring assignament - Arrays
ES6 introduces a new way to manipulate arrays and objects.
It is possible include a array into other one using "..." spread operator. It is equivalent to ".concat" instruction in ES5 (use Babel transpiler).
````javascript
//ES6
let first_array = [7,8,9];
let second_array = [6, ...first_array,10];
console.log(second_array);
//Similar code in ES5
var first_array = [7, 8, 9];
var second_array = [6].concat(first_array, [10]);
console.log(second_array);
````
In ES6 use spread operator to pass server params into function. If the array is length minor than functio param, the last params will be undefined, but the lenght is bigger the first array values will be used by params. The next function works with the array component like isolate variables:
````javascript
function print(a,b,c) {
    console.log(a,b,c);
}
let z = [1,2,3];
let y = [9,8];
let w = [4,5,6,7];
print(...z); //show 1 2 3
print(...y); //show 9 8 undefined
print(...w); //show 4 5 6
````

To get any arguments number like array the function can be defined. The next function works with the array componet like array:

````javascript
function print2(...z){
    console.log(z);
}
print2(z); //show [Array(3)]
print2(...z); //show [1,2,3]
print2(1,2,3,4,5,6,7,8); //show [1,2,3,4,5,6,7,8]
print2(1,'hello',true,2); //show [1,"hello",true,2]
````

For destructuring assignament, it is possible generate several variables from array:
````javascript
let heroes = ['Ryu Hayabusa', 'WonderWoman', 'Thor'];
let [ninja, fighter, throw_thunder] = heroes; //3 variables
console.log(ninja, fighter, throw_thunder);
let [human,...goods] = heroes; //1 variable (position 0), 1 array (positions 1 and 2)
console.log(human, goods);
````
## 3.2. Destructuring assignament - Objects
It is possible apply the destructuring assignament to JavaScript Objects:
````javascript
// Before ES6
let wizard = {
    magical: true,
    power: 10
}
let magical = wizard.magical;
let power = wizard.power;
console.log(magical,power);
````
Use several lines to assigne variables is so heavy, with ES6 it is possible assigne variable in only one line using destructuring method:
````javascript
// ES6
let wizard = {
    magical: true,
    power: 10
}
let {magical, power} = wizard;
console.log("Wizard", magical,power);
````
Note that using destructuring assignament with array, in the variables's bunch is used **[]** characters while in the destructuring assignament with objects, in the variables's bunch is used **{}** characters.<br>
In the destructuring with object the name of the variables and the name of the objcet property must be the same to assing the value. It is possible reuse the variables name using a new code block with **()** characters.
````javascript
let warrior = {
    magical: false,
    power: 12
}
let {magical_01, power_01} = warrior;
console.log('Warrior',magical_01,power_01); // show undefined undefined, the variables and object properties has diferrent names

({magical,power} = warrior); //Use () to create new block and can assig the variables
console.log('Warrior',magical,power);
````

# 4. Functions and Methods
## 4.1. Arrow Functions
Arrow functions are anonymous, don't have a name identifier. Arrow functions work like normal method expressions in JavaScript, but with a shorter syntax
It is called an air function. They do not bind the this object to their function scope.
````javascript
function() {...} VS () => {...}
````
````javascript
function boom(){
    console.log('boom()  3...2...1...BOOM!');
}
boom();
const otherBoom = () => {
    console.log('boom()  3...2...1...Other BOOM!');
}
otherBoom();
````
It is usefull when implement business logic with anonymous functions like **setTimeout** or **setInterval** methods.
````javascript
setTimeout(function(){
    console.log('setTimeout  3...2...1...BOOM!');
}, 1000);
setTimeout(() => {
    console.log('setTimeout  3...2...1...BOOM!');
}, 1000);
//
let i = 3;
let myCount = setInterval(function(){
    if (i > 0) {
        console.log(`${i--} ...`);    
    } else {
        console.log('BOOM!');
        clearInterval(myCount);
    } 
}, 1000);

let j = 3;
let myOtherCount = setInterval(() => {
    if (j > 0) {
        console.log(`${j--} ...`);    
    } else {
        console.log('Ohter BOOM!');
        clearInterval(myOtherCount);
    } 
}, 1000);
````

## 4.2. Arrow Function ignoring **this**
Arrow functions do not bind their own **this**. Each function has its own scope and it creates for itselfs a new keyword called this within that scope.<br>
**This** is an object that within the function scope. The function then bind keys and values to the this object.
````javascript
this.a = 10;
const newprint = function() {    
    console.log('this.a',this.a); //show undefined, no property a inside function
}
newprint();

const newarrowPrint = () => {
    console.log('this.a in arrowPrint',this.a); //show 10, arrow function doesn't have this object in the scope
}
newarrowPrint();
````

## 4.3. Map Method - mapping in ES6
Tha Map funtion in ES6 allow create arrays by calling a function on each element in array.
````javascript
let points = [10,20,30];
let addOne = function(element) {
    return element + 1;
}
let points_02 = points.map(addOne);
console.log(points); //show [10,20,30]
console.log(points_02); //show [11,21,31]
````
The callback can be changed to an anonymous function. In ES6 can take advantage of the anonymous error function ever further rather than declaring the whole addOne function. Can void **()** characters inf the arrow function has only one line and only one parameter.
````javascript
let points_03 = points.map(element => element + 1);
console.log('points_03',points_03) //show [11,21,31]
````

## 4.4. Filter Method - filtering in ES6
The filter method returns a new array based on an initial array, rather than a new array of the same size it usually reudces the array based on some test.
````javascript
let isPassing = (grade) => {
    return grade >= 70;
}
let scores = [90,85,67,71,70,55,92];
let passing = scores.filter(isPassing);
console.log(passing);
````
Just like with the map function we can shorten our code down with an error function. Only one line.
````javascript
let passing_02 = scores.filter(element => element >= 70);
console.log(passing_02);
````
More helper methods with ES6. We can take advantage of their functions to reduce your code:
- **find()** returns a value in an array that passas a given test.
- **forEach()**, similar to map, calls a function for each array element.
- **reduce(), some(), keys(), values()**...


# 5. Modules in ES6
## 5.1. Exporting variables/constants
Modules in JavaScript refert ot reusable pieces of code within our application or system. It helps whe our application grows.<br>
The **export** keyword let access the code from other file using **import** keyword.
````javascript
// inside student.js
export const students = ['Harry', 'Ron', 'Hermoine'];
````
````javascript
// inside index.js
import { students } from "./student";

console.log(students)
````
If need export all file content it is possible export a module instead echa variable/function

## 5.2. Exporting data/functions
Is usefull hava a library function (the ussually utils.js). Could we export theses functions.
````javascript
// inside calculator.js
const add = (x,y) => x+y;
const multiply = (x,y) => x*y;

export {add, multiply}
````
````javascript
// inside index.js
import { add, multiply } from "./calculator";

console.log(add(2,5));
console.log(multiply(2,5));
````
It is possible export a function by default. If a function is defined by default export, not is necessary import this into bracers **{}**.
````javascript
// inside calculator.js
const substraction = (x,y) => x-y;

export default substraction;
````
````javascript
// inside index.js
import substraction from "./calculator";

console.log(substraction(10,6));
````
Note a invalid syntax when make a default export.
````javascript
// inside calculator.js
export default const multiply (x,y) => x*y; // This retur a error in the browser. INVALID SYNTAX
````
The default export represents a fallback or “main” value/function for a module.<br>
You cannot write the export default syntax and declare variables on the same line

# 6. Classes in ES6
## 6.1. Classes set up
ES6 introduce javascript classes and laid the groundwork for a new object oriented programming inheritance model.<br>
The classes will have some revelant data according to its state and behavior.<br>
Object oriented programming has adventages to make a encapsulable and redable code.<br>
Note the next points:
- Use the **class** keyword to define a class in JavaScript,
- Classes have a **constructor()**, it is a special method create an initialises the logic data for the class. Only one by class.
- The object are declared using **new** keyword.
````javascript
class Entity {
    constructor(name,height) {
        this.name = name;
        this.height = height;
    }

    greet() {
        console.log(`Hi! I'm ${this.name} from the Middle Earth`);
    }
}

let merry = new Entity('Merry',4.6);
merry.greet();
````

## 6.1. Classes inheritance
Note the next points:
- In most cases classes exist in separate modules. In inheritance is used the **extends** keyword for extend of other class. The class modules are exported by **default**.
- It is possible create a constructor into son class, but we do reference to **this** object, must do explicity called to **super()** method (calls to the parent constructor).
- If a **constructor** is not defined in the son class, the parent constructor will be called when declare a new son object. Not is necessary implement a constructor if the constructor behavior will be the same of the parent. Only has sense implement a son constructor if it will do some more / or different that the parent's constructor.
- It is possible **override** the parent's methods and variables into son class, but it only affect to thoses son's objects.
````javascript
// inside entity.js
class Entity {    
    constructor(name,height) {
        this.name = name;
        this.height = height;
    }

    greet() {
        console.log(`Hi! I'm ${this.name} from the Middle Earth`);
    }
}

export default Entity;
````
````javascript
// inside index.js
import Entity from "./entity"

class Hobbit extends Entity {
    // Not is necessary if the implementation is equal to the parent
    constructor(name, height) {
        super(name, height)        
    }

    //@Override
    greet() {
        console.log(`Hello! I'm ${this.name} from the Shire`)
    }
}

let frodo = new Hobbit('Frodo Baggins',4.7)
console.log(frodo)
frodo.greet()
````

# 7. Extending Upon ES6 with React
React is a popular JavaScript framework that allows for web development in ES6.<br>
To use react is necessary add some more libraries.
````comman
npm install react-dom react babel-preset-react --save-dev
````
Is necessary make a couple of changes in our application. The first in **package.json** file, add "react" into "babel presets". And into the **.babelrc** file add "react" into "presets".
````json
// inside package.json
  },
  "babel": {
    "presets": [
          "es2015", "react"
    ]
  },
````
````json
// inside .babelrc
{
    "presets": ["env", "react"]
}
````

## 7.1. JSX in ES6
JSX adds XML syntax to JavaScript and allows for rendering elements and components onto a web application.
JSX is a ES extension and let us write HTML code into JavaScript code. With JSX it is possible create the application component.<br>
Inside index.html must include a div with id called **root**. React is going to know target this id of root and overlay all of its component rendering right onto this div.
````html
<!-- Inside index.html-->
<!DOCTYPE html>
<html>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
</html>
````
It is possible define component, how it render into HTML and the component behavior. The **render()** method is a Component method that define how render the component.
````javascript
// inside index.js define App component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {    
    render() {
        return (
            <div>React JS and JSX in action</div>
        )
    }
}

// The component tag name App is the class name, and the second argument is the element to replace
ReactDOM.render(<App/>, document.getElementById('root'));
````

## 7.2. Promises
A promise handles the eventual result of an operation and determines if it returns a success or failure.<br>
To get our data for this app and test the promise with ES6 and React, we use an API called [Open Weather Map](https://home.openweathermap.org/), it publibshes free data based on weather in cities and a whole lot of other analytics.
The API responses have JSON format and is necessary sign in and a [API key for work](https://home.openweathermap.org/api_keys).<br>
The API to use is [Current weather data](https://openweathermap.org/current). In the API documentation can get a Examples of API calls like http://api.openweathermap.org/data/2.5/weather?q=London. Furthermore set the API url is necessary set the API ID in the call, it will be the api key gotten previously.<br>
The **fetch()** method returns a promise, we can use the **then()** method to execute things when the reponse arrive.
````javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// my api key
const api_key = '68bb3929b7da22171b348bd3e352da18';

class App extends Component {
    /** Initialize the component */
    constructor(props) {
        super(props);
        this.state = {
            city: 'Barcelona',
            description: ''
        }
    }
    /** Called when the component is rendered */
    componentDidMount() {
        this.grabWeather(this.state.city);
    }
    /** get the weather from the API */
    grabWeather(city) {
        // fetch returns a promise
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
        .then(response => console.log(response));
    }
    /** Component Render in HTML */
    render() {
        return (
            <div>React JS and JSX in action</div>
        )
    }
}

// The component tag name App is the class name, and the second argument is the element to replace
ReactDOM.render(<App/>, document.getElementById('root'));
````
To get de JSON response and set the weather description:
````javascript
// inside index.js
    grabWeather(city) {
        // fetch returns a promise
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({description: json.weather[0].description})
        });
    }
````
To show the info in the page modifying the render method in the App component. With **{}** we can access to the component properties. We can add component properties to get more information from the API.
````javascript
// inside index.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// my api key
const api_key = '68bb3929b7da22171b348bd3e352da18';

class App extends Component {

    /** Initialize the component */
    constructor(props) {
        super(props);
        this.state = {
            city: 'Barcelona',
            description: '',
            tempK: '',
            tempC: '',
            humidity: ''
        }
    }

    /** Called when the component is rendered */
    componentDidMount() {
        this.grabWeather(this.state.city);
    }

    /** get the weather from the API */
    grabWeather(city) {
        // fetch returns a promise
        fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                description: json.weather[0].description,
                tempK: json.main.temp,
                tempC: this.kelvinToCelsius(json.main.temp),
                humidity: json.main.humidity
            })
        });
    }

    /** Returns the kelvin grades in celsius format */
    kelvinToCelsius(kelvin_grades) {
        return (kelvin_grades - 273.15).toFixed(2);
    }

    /** Component Render in HTML */
    render() {
        return (
            <div>
                <h2>Wheather Report for: {this.state.city}</h2>
                <ul>
                    <li>Description: {this.state.description}</li>
                    <li>Temp: {this.state.tempK}ºK / {this.state.tempC}ºC</li>
                    <li>Humidity: {this.state.humidity}%</li>
                </ul>
            </div>
        )
    }
}

// The component tag name App is the class name, and the second argument is the element to replace
ReactDOM.render(<App/>, document.getElementById('root'));
````



_________________________________
_________________________________
_________________________________
_________________________________
# NOTES
- **Is it possible arrow function into class definition?** Yes, but if the methods are implemented with arrow function theses don't will be added to the prototype. The arrow functions aren't methods, are anonymous function expresions. So the only way to add them to a class is by assignment to a property. In my opinion better not use arrow function to implement Class methods. Reference: [Of Classes and Arrow Functions](https://javascriptweblog.wordpress.com/2015/11/02/of-classes-and-arrow-functions-a-cautionary-tale/)