// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

// thats the overall todoFunctions-Object
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

  // addTodo adds a new element to the end of the todos array of objects
  addTodo: function(todos, newTodo) {
    var arr = [];
    arr.push(newTodo);
    todos = todos.concat(arr);
    return todos;
  },

  // deleteTodo removes a element of the array of objects
  deleteTodo: function(todos, idToDelete) {
    var newArr = this.cloneArrayOfObjects(todos);
    newArr = newArr.filter(newArrElem => newArrElem.id != idToDelete);
    todos = newArr;
    return todos;
  },

  // markTodo creates a toggle function to either mark or unmark todo-tasks
  markTodo: function(todos, idToMark) {
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

  // sortTodos sorts the elements according to their done status (true or false)
  sortTodos: function(todos) {
    var newArr = this.cloneArrayOfObjects(todos);
    newArr.sort(function(firstTask, secondTask) {
      if (firstTask.done === true) {
        return 1;
      } else {
        return -1;
      }
    });
    todos = newArr;
    return todos;
  }
};

if (typeof module !== "undefined") {
  module.exports = todoFunctions;
}
