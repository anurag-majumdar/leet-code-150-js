/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length != t.length) return false;
  const frequencyMap = new Map();
  for (const char of s) {
    if (frequencyMap.has(char)) {
      frequencyMap.set(char, frequencyMap.get(char) + 1);
    } else {
      frequencyMap.set(char, 1);
    }
  }

  for (const char of t) {
    if (!frequencyMap.has(char)) return false;
    else {
      const charFrequency = frequencyMap.get(char);
      if (charFrequency === 1) frequencyMap.delete(char);
      else frequencyMap.set(char, charFrequency - 1);
    }
  }
  return true;
};
