var prompt = require('sync-prompt').prompt;
var weight = prompt('What is your current weight? (lbs)? ');
var gender = prompt('What is your gender (m/f)? ');
weight = parseInt(weight);
var food = [];
var total = 0;

var option = prompt('(E)at or (Q)uit: ');

while(option != 'Q'){
  var eat = prompt('What did you eat? ');
  var calories = prompt('How many calories? ');
  
  total += parseInt(calories);
  food.push(eat);
  option = prompt('(E)at or (Q)uit: ');
}

weight += gender === 'f' ? total/3000 : total/4000;
console.log('You ate: ' + food = 'Your current weight is: ' + weight);

