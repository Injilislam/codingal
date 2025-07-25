function generatePassword(length) {
  let password = '';
  const digits = '0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    password += digits[randomIndex];
  }

  return password;
}

// Example: Generate a password of length 10
const password = generatePassword(10);
console.log("Your random password is:", password);
