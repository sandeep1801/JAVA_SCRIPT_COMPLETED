// Prepare Chicken Curry using JavaScript Functions

// glassBowl
function glassBowl(rawChicken,masala) {
    // Mixing Logic
    let marinateChicken = `(Mixing: ${rawChicken} + ${masala})`;
    return marinateChicken;
}

// cooking Bowl
function cookingBowl(marinatedChicken,water){
    // Cooking Logic
    let cookedChicken = `(Cooking : ${marinatedChicken} + ${water})`;
    return cookedChicken;
}

// eatingPlate
function eatingPlate(cookedChicken,rice) {
    // Eating Logic
    let eating = `Eating : ${cookedChicken} + ${rice}`;
    console.log(eating);
}

let rawChicken = '2kg Chicken';
let masala = 'Garlic , Pepper , salt';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = '1l Water';
let cookedChicken = cookingBowl(marinatedChicken,water);
let rice = '1kg Rice';
eatingPlate(cookedChicken,rice);

// Function without parameters
// Function Declaration
function print(startNumber,endNumber,increment) {
    let tempStr = '';
    for(let i = startNumber; i<=endNumber; i+= increment){
        if(i < endNumber){
            tempStr += `${i} , `;
        }
        else{
            tempStr += `${i}`;
        }
    }
    return tempStr;
}
let result = print(0,100,10);
let numberArray = result.split(' , ');
console.log(numberArray);

result = print(1,50,1);
numberArray = result.split(' , ');
console.log(numberArray);


