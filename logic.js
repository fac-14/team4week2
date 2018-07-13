// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd
var count=0;

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    var arr = [];
    arr.push(newTodo);
    todos = todos.concat(arr);
    return todos;
  },

  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    var newArr = this.cloneArrayOfObjects(todos);
    newArr = newArr.filter(newArrElem => newArrElem.id != idToDelete);
    todos = newArr;
    return todos;
  },

  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    var newArr = this.cloneArrayOfObjects(todos);
    newArr.map(function(val) {
      if (val.id == idToMark) {
        if (val.done == true) {
          val.done = false;
        } else {
          val.done = true;
        }
      }
    });
    todos = newArr;
    return todos;
  },

    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort

    sortTodos: function(todos) {
      var newArr = this.cloneArrayOfObjects(todos);
      if(count%2===0){

        newArr.sort(function(firstTask, secondTask)
      {
        var i=0;
        while(firstTask.description.charCodeAt(i)===secondTask.description.charCodeAt(i)){
          i+=1;
        }
        return firstTask.description.charCodeAt(i)-secondTask.description.charCodeAt(i);
      });
      newArr.sort(function(firstTask, secondTask) {

        if (firstTask.done === true) {
          return 1;
        } else {
          return -1;
        }
      });

    }
    else{
      newArr.sort(function(firstTask,secondTask) {
        return firstTask.id - secondTask.id

      });
      newArr.sort(function(firstTask, secondTask) {

        if (firstTask.done === true) {
          return 1;
        } else {
          return -1;
        }
      });

    }
      count +=1;
      console.log(count);
      todos = newArr;
      return todos;
      }

};

// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
