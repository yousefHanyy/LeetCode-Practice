var groupAnagrams = function (strs) {
  const map = new Map();

  for (let word of strs) {
    //! Make a key for each word that you can use later to determine if there are similar, which then leads to grouping them together.
    const key = word.split("").sort().join();
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }
  return [...map.values()];
};
console.log(groupAnagrams(strs));
