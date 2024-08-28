var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard",
];
//console.log(groceries);
var deleteDuplicates = function (list) {
  var cleanList = [];
  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};
//deleteDuplicates();
var newGroceryList = deleteDuplicates(groceries);
console.log(newGroceryList);
newGroceryList.forEach(function (list, index) {
  console.log(`${index + 1}. ${list}`);
});
