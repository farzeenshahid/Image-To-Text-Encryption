function encrypt() {
    const fileInput = document.getElementById('inputImage');
    const outputText = document.getElementById('outputText');
    const reader = new FileReader();
    const secretText = document.getElementById('secretText').value;
    
  
    reader.onload = function(e) {
      const imageData = e.target.result;
      const encryptedData = encryptAES(imageData, secretText);
      outputText.value = encryptedData;
    };
  
    reader.readAsDataURL(fileInput.files[0]);
}
function decrypt() {
    const outputText = document.getElementById('outputText').value;
    const secretText = document.getElementById('secretText').value;
    const decryptedData = decryptAES(outputText, secretText);
    const outputImage = document.getElementById('outputImage');
    const secretTextDecrypted = decryptedData.secretText;
    outputImage.src = decryptedData.imageData;
    document.getElementById('outputSecret').textContent = 'Decrypted Secret Key: ' + secretTextDecrypted;
}

function encryptAES(input, secretText) {
    const encrypted = CryptoJS.AES.encrypt(input, secretText).toString();
    return encrypted;
}

function decryptAES(input, secretText) {
    const decrypted = CryptoJS.AES.decrypt(input, secretText).toString(CryptoJS.enc.Utf8);
    return { imageData: decrypted, secretText: secretText };
}