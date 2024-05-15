# Project Documentation: Image to Text Encryption 
## 1. Overview: 
The project aims to encrypt an image into text format using AES encryption and decrypt it back to its 
original form. It provides a simple user interface for selecting an image file, entering a secret key, and 
performing encryption/decryption operations. 
## 2. Files: 
+ **index.html:** The landing page of the project, displaying project information and team members. 
+ **home.html:** The main page where encryption and decryption functionalities are implemented. 
+ **styles.css:** CSS file containing styles for the user interface. 
+ **crypto-js.js:** JavaScript library for AES encryption and decryption. 
+ **script.js:** JavaScript file containing encryption and decryption functions. 
## 3. index.html: 
+ **Title:** Home page 
+ **Content:** 
  + Displays project title and topic. 
  + Lists team members' names. 
  + Contains a button linking to home.html for accessing the encryption/decryption 
functionality. 
## 4. home.html: 
+ **Title:** Image to Text Encryption 
+ **Content:** 
  + Provides an interface to select an image file and enter a secret key. 
  + Allows users to perform encryption and decryption operations. 
  + Displays the encrypted text and decrypted image. 
  + Shows the decrypted secret key. 
## 5. styles.css: 
+ Defines styles for the user interface elements such as headings, buttons, and input fields. 
+ Sets background image and layout for index.html. 
+ Styles the input file button and text input fields. 
## 6. script.js: 
+ Contains JavaScript functions for encryption and decryption. 
+ **Functions:**
  + **encrypt():**
     Reads selected image file, encrypts it using AES encryption with the provided 
     secret key, and displays the encrypted text. 
  + **decrypt():**
    Decrypts the encrypted text using the provided secret key and displays the 
    decrypted image and secret key. 
  + **encryptAES(input, secretText):**
    Encrypts the input using AES encryption with the 
    provided secret key. 
  + **decryptAES(input, secretText):**
    Decrypts the input using AES decryption with the 
    provided secret key. 
## 7. External Libraries: 
+ **CryptoJS:**
  A JavaScript library for cryptographic operations, used for AES encryption and 
  decryption. 
## 8. Usage: 
+ Open **index.html** to view the project overview and team members. 
+ Click on the button to navigate to **home.html**. 
+ On **home.html**, select an image file, enter a secret key, and click "Encrypt" to encrypt the image. 
+ Click "Decrypt" to decrypt the encrypted text and display the original image along with the 
decrypted secret key. 
