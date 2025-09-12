"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
users.forEach(user => {
  console.log(user.name);
  const li = document.createElement("li");
  li.textContent = user.name;
  document.getElementById("names-list").appendChild(li);
});
// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
users
  .filter(user => user.age < 40)
  .forEach(user => {
    console.log(user.name);
    const li = document.createElement("li");
    li.textContent = user.name;
    document.getElementById("young-characters-list").appendChild(li);
  });

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
function renderList(array, elementId) {
  const ul = document.getElementById(elementId);
  ul.innerHTML = ""; 

  array.forEach(user => {
    if (user.name) {
      const li = document.createElement("li");
      li.textContent = user.name;
      ul.appendChild(li);
    }
  });
}
renderList(users, "function-list");
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function renderByAge(array, threshold, elementId) {
  const ul = document.getElementById(elementId);
  ul.innerHTML = "";

  array.forEach(user => {
    if (user.age < threshold && user.name) {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.age})`;
      ul.appendChild(li);
    }
  });
}
renderByAge(users, 50, "age-filter-list");

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
function namesList(arrayName, listElement, errorDiv = errorElement) {
  listElement.innerHTML = "";
  errorDiv.innerHTML = "";

  arrayName.forEach(object => {
    if (!object.name) {
      let errorMessage = `Error! The object: ${JSON.stringify(object, null, 2)} is missing a "name" property!`;
      console.error(errorMessage);

      const errorInfo = document.createElement("li");
      errorInfo.id = 'failed-objects';      
      errorInfo.classList.add("error-message");     
      errorInfo.textContent = errorMessage;
      listElement.append(errorInfo);
    } else {
      const item = document.createElement("li");
      item.id = 'passed-objects';
      item.textContent = object.name;
      listElement.append(item);
    }
  });
}


// broken test data for exercise 5
const errorElement = document.getElementById("error-messages");
const errorHandling = document.getElementById("error-handling-list");
 
const broken = [
  { id: 1, name: "Skibidi", age: 39 },
  { id: 2, name },
  { id: 3, age: 677777},
  { id: 4, name: "Theo", age: 3 },
  { id: 5, name: "", age: 10 },
  { id: 6, name: "Levi", age: 67 },
];
 
namesList(broken, errorHandling, errorElement);
