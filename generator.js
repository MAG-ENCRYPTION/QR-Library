// import qrcode librairy
const QRCode = require('qrcode');

/*
  input : data (for exemple a text or an URL)
  output : image of QRCode or an error
 */
function generateQRCode(data) {
  return new Promise((resolve, reject) => {
    QRCode.toDataURL(data, (error, url) => {
      if (error) {
        reject(error);
      } else {
        resolve(url);
      }
    });
  });
}

module.exports = { generateQRCode };