function reverseString(inputString) {
    console.log(inputString);
    const Split = inputString.split(' ')
    const reverseword = Split.map((word) => {
        return word.split('').reverse().join('')
    })
    const reversedString=reverseword.join(' ')
  return reversedString
}


const inputString1 = "asim fayas is full stack web dev";
const reversed1 = reverseString(inputString1);
console.log(reversed1); 

const inputString2 = "java script";
const reversed2 = reverseString(inputString2);
console.log(reversed2);

const inputString3 = "node js";
const reversed3 = reverseString(inputString3);
console.log(reversed3);

const inputString4 = "Angular 16";
const reversed4 = reverseString(inputString4);
console.log(reversed4); 


// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐