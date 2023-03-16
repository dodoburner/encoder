module.exports = function decodeString(encodedString) {
  let result = "";
  let str = encodedString.toUpperCase();

  for (let i = 0; i < str.length; i += 2) {
    const char = str[i];
    const num = str[i + 1];

    result += char.repeat(num);
  }

  return result;
};
