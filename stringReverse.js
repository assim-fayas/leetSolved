function reverseString(inputString) {
    // Split the input string into words
    const words = inputString.split(' ');
  
    // Reverse each word and join them back together with spaces
    const reversedWords = words.map(word => word.split('').reverse().join(''));
  
    // Join the reversed words to get the final reversed string
    const reversedString = reversedWords.join(' ');
  
    return reversedString;
  }
  
  const inputString = "hello fayas";
  const reversed = reverseString(inputString);
  console.log(reversed); // Output: "iah  misa"
  