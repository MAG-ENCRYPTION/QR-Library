# QR Code Library
#### QR Code Library is a lightweight JavaScript library for generating QR codes from a URL or text message.

## Installation
#### You can install the QR Code Library via npm by using the following command:
```cmd
npm install qr-library
```

## Usage
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
#### The provided code creates a QR code by generating a new object from the QRCodeGenerator class and using the generate() method with specified data. The resulting QR code is returned as an image representation.


## Guided Examples
### Exemple 1 : Generate a QR code for a URL link
```javascript
QRCodeGenerator('https://www.example.com')
  .then(qrCode => {
    console.log(qrCode);
  })
  .catch(error => {
    console.error('Error during QR code generation:', error);
  });
```

### Exemple 2 : Generate a QR code for a text message
```javascript
QRCodeGenerator('Hello qr-code !!!')
  .then(qrCode => {
    console.log(qrCode);
  })
  .catch(error => {
    console.error('Error during QR code generation:', error);
  });
```

## Contributions
You are invited to contribute to the QR Code Library! Feel free to submit a pull request if you wish to enhance the library by making improvements, fixing bugs, or adding new features. Your valuable contributions will be highly appreciated and will benefit all users.

## License
### The QR Code Library is licensed under the MIT License. Please see the LICENSE file for more information.
