# QR Code Library
#### QR Code Library is a lightweight JavaScript library for generating QR codes from a URL or text message.

## Installation
#### You can install the QR Code Library via npm by using the following command:
```cmd
npm qr-code-library
```

## Usage
#### To use the QR Code Library, you need to import it into your project:
```javascript
import QRCodeGenerator from 'qr-code-library';
```
#### Next, you can create a new QRCodeGenerator object and generate a QR code using the generate() method:
```javascript
const qrcode = new QRCodeGenerator();
const qrData = 'Hello, QR code!';
const qrCodeImage = qrcode.generate(qrData);
```
#### The provided code creates a QR code by generating a new object from the QRCodeGenerator class and using the generate() method with specified data. The resulting QR code is returned as an image representation.

#### You have the flexibility to customize the QR code with options like size, color, and error correction level. Here's an example showcasing how to specify these options.
```javascript
const qrcode = new QRCodeGenerator();

qrcode.setSize(200); // Specify the size of the QR code in pixels
qrcode.setDarkColor('#000000'); // Specify the color of the dark modules
qrcode.setLightColor('#FFFFFF'); // Specify the color of the light modules
qrcode.setErrorCorrection(QRCodeGenerator.ErrorCorrectionLevel.HIGH); // sets the error correction level of the QR code to high. Higher error correction levels provide better resilience to damage or printing imperfections, but result in a denser QR code

const qrCodeImage = qrcode.generate(qrData); // Generate the QR code image
```

## Guided Examples
### Exemple 1 : Generate a QR code for a URL link
```javascript
const qrcode = new QRCodeGenerator();
const qrData = 'https://www.example.com';
const qrCodeImage = qrcode.generate(qrData);
```

### Exemple 2 : Generate a QR code for a text message
```javascript
const qrcode = new QRCodeGenerator();
const qrData = 'Hello, QR generator!';
const qrCodeImage = qrcode.generate(qrData);
```

## Contributions
You are invited to contribute to the QR Code Library! Feel free to submit a pull request if you wish to enhance the library by making improvements, fixing bugs, or adding new features. Your valuable contributions will be highly appreciated and will benefit all users.

## License
### The QR Code Library is licensed under the MIT License. Please see the LICENSE file for more information.
