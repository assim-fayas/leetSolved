// 1160. Find Words That Can Be Formed by Characters

function countCharacters(string, words) {
    let wordcount = 0;
    
    // Create a helper function to check if a word can be formed from characters in the string
    function canFormWord(word, chars) {
      const charCount = {};
      
      // Count characters in the word
      for (const char of chars) {
        charCount[char] = (charCount[char] || 0) + 1;
      }
      
      // Check if the word can be formed
      for (const char of word) {
        if (!charCount[char] || charCount[char] === 0) {
          return false;
        }
        charCount[char]--;
      }
      
      return true;
    }
  
    // Check each word
    for (const word of words) {
      if (canFormWord(word, string)) {
        wordcount += word.length;
      }
    }
    
    return wordcount;
  }
  
  console.log(countCharacters("atach", ["cat", "bt", "hat", "tree"])); // Output: 6
  