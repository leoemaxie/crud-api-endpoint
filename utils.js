function generateID(name) {
  const crypto = require('crypto');

  // Get the current timestamp in milliseconds
  const timestamp = Date.now().toString();

  // Concatenate the input string and timestamp
  const combinedString = name + timestamp;

  // Hash the combined string using SHA-256
  const hash = crypto.createHash('sha256').update(combinedString).digest('hex');

  // Take the first 4 characters of the hash (16 bits)
  const first64Bits = hash.slice(0, 8);

  // Convert the hexadecimal value to a decimal integer
  const uniqueNumber = parseInt(first64Bits, 16);

  return uniqueNumber;
}

module.exports = generateID;
