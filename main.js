// 

var maxLength = 64; // Maximum allowed length


function generatePassword() {
    length = Math.min(document.getElementById('length').value, maxLength);
    var useLowercase = document.getElementById('lowercase').checked;
    var useUppercase = document.getElementById('uppercase').checked;
    var useNumbers = document.getElementById('numbers').checked;
    var useSymbols = document.getElementById('symbols').checked;

    var charset = '';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    if (useLowercase) {
        charset += lowercaseChars;
    }
    if (useUppercase) {
        charset += uppercaseChars;
    }
    if (useNumbers) {
        charset += numberChars;
    }
    if (useSymbols) {
        charset += symbolChars;
    }

    var password = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    document.getElementById('password').innerText = 'Generated Password: ' + password;
}