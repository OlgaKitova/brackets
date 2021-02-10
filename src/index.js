module.exports = function check(str, bracketsConfig) {
  let   firstBracket = bracketsConfig.map(item => item[0]),
        secondBraket = bracketsConfig.map(item => item[1]),
        total = [],
        firstIndex, secondIndex;

  for (let i = 0; i < str.length; i++) {
    firstIndex = firstBracket.indexOf(str[i]);
    secondIndex = secondBraket.indexOf(str[i]);

    if (secondIndex === firstIndex) {
      if (total.length > 0 && total[total.length - 1] === secondIndex) {
        total.pop();
      } else {
        total.push(firstIndex);
      }
    } else if (firstIndex != -1) {
      total.push(firstIndex);
    } else {
      if (total[total.length - 1] === secondIndex) {
        total.pop();
      } else {
        return false;
      }
    }
  }
  
  return total.length === 0;
}
