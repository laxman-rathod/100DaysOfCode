/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  const regex = /[0-9]/;
  let wordsArray = s.split(" ");

  // Sorting the array based on the appended numbers
  wordsArray.sort((a, b) => {
    const numA = parseInt(regex.exec(a)[0]);
    const numB = parseInt(regex.exec(b)[0]);
    return numA - numB;
  });

  // Removing the numbers and joining the words into a sentence
  let result = wordsArray.map((word) => word.replace(regex, "")).join(" ");

  return result;
};
