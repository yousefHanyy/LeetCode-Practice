// TODO: isAnagram problem:

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  //* Count the letters better than using include to avoid words with multiple letters causing issues */
  let count = {};

  for (let letter of s) {
    //! Check if the letter even exists first before adding 1
    count[letter] = (count[letter] || 0) + 1;
  }

  for (let letter of t) {
    //* Subtracting the letters from the object:
    if (!count[letter]) {
      //! If a certain letter doesn't even exist return false.
      return false;
    }
    count[letter]--;
  }
  return true;
};
