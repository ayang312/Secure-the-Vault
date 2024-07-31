/*
1. I will create a variable for the string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
2. I will then create a variable for the arithmetic operator: first combination is 7 + 3
3. I will create another variable for the arithmetic operator: second combination is 20 * 2
4. I will create another variable for the arithmetic operator: third combination is 42 - 3
5. I will create a variable to concatenate the variables
6. I will create a popup dialog displaying the vault codes and the text
*/

// Create string with text first
const str = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

//Assign three variables using the previously stated arithmetic operators
//First combination using addition
const firstcombo = 7 + 3;

//Second combination using multiplication
const secondcombo = 20 * 2;

//Third combination using subtraction
const thirdcombo = 42 - 3;

// Create string to concatenate
const strComplete = `${str} ${firstcombo} - ${secondcombo} - ${thirdcombo}`

//Use alert to display a popup dialog box showing the concatenated variables
alert(strComplete);