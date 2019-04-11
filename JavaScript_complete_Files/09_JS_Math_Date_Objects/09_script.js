/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(`Pi value : ${piValue}`);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`Sqrt of 144 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(45,454,87,8,79,984,9,894,81,1,61);
console.log(`Min value : ${min}`);

// find the Max of 4 numbers
let max = Math.max(45,454,87,8,79,984,9,894,81,1,61);
console.log(`Max value : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,4);
console.log(`2 ^ 4 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let today = new Date();
console.log(today);

// Get proper date
let date = new Date().toLocaleDateString();
console.log(date);

let currentTime = new Date().toLocaleTimeString();
console.log(currentTime);

// get full day of the week using switch statement
let day = new Date().getDay();
let fullDay = '';
switch(day){
    case 0:
        fullDay = 'Sunday';
        break;
    case 1:
        fullDay = 'Monday';
        break;
    case 2:
        fullDay = 'Tuesday';
        break;
    case 3:
        fullDay = 'Wednesday';
        break;
    case 4:
        fullDay = 'Thursday';
        break;
    case 5:
        fullDay = 'Friday';
        break;
    case 6:
        fullDay = 'Saturday';
        break;
    default:
        fullDay = '';
        break;
}
console.log(`Today is  : ${fullDay}`);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let num1 = Number(100);
console.log(`Value : ${num1} Type : ${typeof num1}`);

let maxValue = Number.MAX_VALUE;
console.log(`Max value : ${maxValue}`);

let minValue = Number.MIN_VALUE;
console.log(`Min Value : ${minValue}`);

let posInfinity = Number.POSITIVE_INFINITY;
console.log(posInfinity);

let negInfinity = Number.NEGATIVE_INFINITY;
console.log(negInfinity);

let num2 = Number(100).toString();
console.log(`Value : ${num2} Type : ${typeof num2}`);

let str = Number.parseFloat('100.11');
console.log(`Value : ${str} Type : ${typeof str}`);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let msg = 'Good Morning';

// Get the Substring
let msg2 = msg.substr(5); // Morning
console.log(msg2);

// get the substring
let msg3 = msg.substr(0,4); // Good
console.log(msg3);

// Length of string
console.log(`Length : ${msg.length}`); // 12

// get the char
console.log(`char @ 5 : ${msg.charAt(5)}`); //  M

// get the Char Code
console.log(`charCode @ 5 : ${msg.charCodeAt(5)}`); //  M

// Uppercase
console.log(msg.toUpperCase());

// Lowercase
console.log(msg.toLowerCase());

// Example 1: Count the chars in String
let theStr = 'Good Morning';
let countZeros = (str) => {
    let count = 0;
    for(let i = 0; i<= str.length-1;i++){
        let char = str.charAt(i);
        if(char === 'o'){
            count++;
        }
    }
    return count;
};
console.log(`Char Count : ${countZeros(theStr)}`);

// Example 2: Reverse String
theStr = 'Good Morning'; // "gninroM dooG"
let reverseStr = (str) => {
    let tempStr = '';
    for(let i = str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseStr(theStr));

// Example 3: isPalindrome Str ?
theStr = 'ABA';
let isPalindrome = (str) => {
    return str === reverseStr(str);
};
console.log(`${theStr} is Palindrome ? : ${isPalindrome(theStr)}`);

// Example 4: convert to Palindrome
theStr = 'ABR';
let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i=str.length-2; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(`${theStr} => ${convertToPalindrome(theStr)}`);

// Example 5: convert a number to in Words
let theNumber = '9844';
let wordNumber = (theNumber) => {
    let tempStr = '';
    for(let i=0; i< theNumber.length; i++){
        let digit = Number(theNumber.charAt(i));
        switch(digit){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
            default:
                tempStr += '';
                break;
        }
    }
    return tempStr;
};
console.log(wordNumber(theNumber));

// Example 6 : WordNumber
let theNumberStr = '456';
let numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let displayWordNumber = (theNumberStr) => {
    let tempStr = '';
    for(let i=0; i< theNumberStr.length; i++){
        let digit = Number(theNumberStr.charAt(i));
        tempStr += `${numberArray[digit]} `;
    }
    return tempStr;
};
console.log(displayWordNumber(theNumberStr));

// Example 7: Palindrome Word Number
theNumberStr = '123'; // 456-54
numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
let palindromeWordNumber = (theNumberStr) => {
    let tempStr = displayWordNumber(theNumberStr);
    for(let i=theNumberStr.length-2; i>=0; i--){
        let digit = Number(theNumberStr.charAt(i));
        tempStr += `${numberArray[digit]} `;
    }
    return tempStr;
};
console.log(palindromeWordNumber(theNumberStr));

// Example 8: TriangleOne
theStr = 'NISHIKANT';
let triangleOne = (str) => {
    let tempStr = '';
    for(let i=1; i<=str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleOne(theStr));

// Example 9: TriangleTwo
theStr = 'NISHIKANT';
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1;i<=number;i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

// Example 10: TriangleTwo
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length;i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleTwo(theStr));

// Example 11: TriangleThree
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(theStr));

// Example 12: TriangleFour
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(theStr));

function sleepIn(weekday, vacation) {
    return !weekday || vacation;
}

function monkeyTrouble(aSmile, bSmile) {
    return ((aSmile && bSmile) || (!aSmile && !bSmile));
}
function sumDouble(a, b) {
    if(a == b){
        return 2 * (a + b);
    }
    else{
        return a + b;
    }
}

function diff21(n) {
    if(n > 21){
        return 2 * Math.abs(n - 21);
    }
    else{
        return Math.abs(n - 21);
    }
}