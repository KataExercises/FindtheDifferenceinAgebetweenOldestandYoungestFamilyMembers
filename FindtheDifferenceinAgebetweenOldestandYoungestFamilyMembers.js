   
// At the annual family gathering, the family likes to find
// the oldest living family member’s age and the youngest
// family member’s age and calculate the difference between them.
//https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
// You will be given an array of all the family members' ages,
// in any order. The ages will be given in whole numbers, 
// so a baby of 5 months, will have an ascribed ‘age’ of 0. 
// Return a new array (a tuple in Python) with [youngest age, oldest age, 
// difference between the youngest and oldest age].
  
function differenceInAges(ages){
    var newArr =[];
    var tempArry = [...ages];
    
    tempArry.sort((a,b) => a-b);
    //console.log(ages);
    var youngAge = tempArry[0];
    var oldAge = tempArry[tempArry.length-1];
    var difference = oldAge-youngAge;
   
    newArr.push(youngAge,oldAge,difference);
    return newArr;
 }

 
 Test.assertSimilar(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
Test.assertSimilar(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);