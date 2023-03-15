module.exports = function encodeString(string) {
  let result = "";
  let count = 1;
  const str = string.toUpperCase().trim();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  return result;
};
