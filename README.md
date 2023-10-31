# QR Code Library
#### QR Code Library is a lightweight JavaScript library for generating QR codes from a URL or text message.

## Installation
#### You can install the QR Code Library via npm by using the following command:
```cmd
npm install qr-library
```

## Usage
### Usage for back-end api
#### To use the QR Code Library, you need to import it into your project:
```javascript
const { QRCodeGenerator } = require('./generator.js');
```
#### Next, you can obtain the qr code likde this:
```javascript
QRCodeGenerator('https://www.example.com')
  .then(qrCode => {
    // you can do what you want with the qrCode here
  })
  .catch(error => {
    console.error('Error during QR code generation:', error);
  });
```

### Usage for front-end with html
#### You can follow these steps
#### 1- Install Webpack and its related dependencies in your project by running the following command in your terminal:
```shell
npm install webpack webpack-cli --save-dev
```
#### 2- In your JavaScript code, import and use the library. For example:
```javascript
const { QRCodeGenerator } = require('./generator.js');
// Use the library
```
#### 3- Create a Webpack configuration file named webpack.config.js at the root of your project. Open webpack.config.js with a text editor and configure it to transpile and bundle your JavaScript code. Here's a basic example:
```javascript
const path = require('path');

module.exports = {
  entry: './your-entry-file.js', // Replace with the path to your JavaScript entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Replace with the desired output folder for the bundle
  },
};
```
#### 4- Build your JavaScript bundle using Webpack by running the following command in your terminal:
```shell
npx webpack --config webpack.config.js
```
#### Webpack will transpile your JavaScript code, bundle it with the npm library you imported, and generate a bundled JavaScript file (e.g., bundle.js) in the specified output folder.

#### 5- Create HTML file and Inside the HTML file, add the following script tag to include the bundle.js file:
```script
<script src="path/to/bundle.js"></script> <!-- Remplace with path of bundle.js -->
```
## Contributions
You are invited to contribute to the QR Code Library! Feel free to submit a pull request if you wish to enhance the library by making improvements, fixing bugs, or adding new features. Your valuable contributions will be highly appreciated and will benefit all users.

## License
#### The QR Code Library is licensed under the MIT License. Please see the LICENSE file for more information.
