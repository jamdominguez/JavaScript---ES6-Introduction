# JavaScript-ES6_Introduction
Introduction to ES6 using Node and Webpack

## What is new in ES6?
- Syntax and features
- Classes, modules, array and object manipulation

## Tools
- Node: Install or use portable version setting Node path into "path" environment variable. With node we can use node package manager (npm) to installa dependencies.
  ``` command
  node -v    ..... To show the Node version
  npm -v     ..... To show the Node version
  npm i npm  ..... To show the Node version
  ```

- Babel: A transpiler reads code written in one language and produces the equivalent code in another. Browsers only currently have widespread support of older JS. Transpiler convert advanced TypeScript and CoffeScript code back into the original JS. Transpiles ES6 back into the supported pre ES6 JS. Babel is a JavaScript compiler.
 - Webpack: It is a npm, It allows us to run in an environment that hosts VAP. The benefist:
    - It bundles modules into one .js file    
    - Comes with a dev-server
  
# Project Configuration
## Set up Project Webpack 4
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
## Configure Webpack and Development Server
Webpack let export the application like bundle. For it is necessary configure the "webpack.config.js" file. to define the module export. <br>
With the bundle funcionality will get the "build" folder with "bundle.js" and not need anymore the "dist" folder.
Is necessary install a webpack server to test the application. For this:
```` command
npm i webpack-dev-server@3.1.4 --save-dev ..... to install a webpack development server
````
Now is necessary change the "start" script inside package.json to "webpack-dev-server --module development".
Is necessary too add a new key "devServer" into webpack.config.js to define the devlopment server features.
After add the new key, when the command "npm run start" application will be deployed and the server will be run.
With the server run, the changes into "index.js" (file into app folder) can be shown inmeidately in the browser.

## Set up Babel with Webpack
The main job of Babel is transfer all moder javascript ES6 to ES5. ES5 is fully supported on all browsers. <br>
Is necessary add three new dependencies related to configuring Babel:
````command
npm i babel-core@6.26.3 babel-loader@7.1.4 babel-preset-env@1.7.0 --save-dev ..... installa de Babel core, loader y preset environment
````
Babel must be configured into "webpack.config.js" file, add a new key for this "module". But is necessary a extra configuration, for this create a new file ".babelrc"

# Coding New ES6 Syntax
## Declare variables and scope
