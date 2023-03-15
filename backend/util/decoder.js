module.exports = function decode(encodedString) {
  let result = "";

  for (let i = 0; i < encodedString.length; i += 2) {
    const char = encodedString[i];
    const num = encodedString[i + 1];

    result += char.repeat(num);
  }

  return result;
};
