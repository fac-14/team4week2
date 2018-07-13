// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = []; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo

  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    todoNode.appendChild(document.createTextNode(todo.description));

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);
    deleteButtonNode.className = "delButton";

    // add markTodo button
    var markUnmarkButtonNode = document.createElement("button");
    markUnmarkButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    // set up toggle for mark or unmark button
    if (todo.done == true) {
      markUnmarkButtonNode.className = "markButton";
    } else {
      markUnmarkButtonNode.className = "unMarkButton";
    }

    todoNode.appendChild(markUnmarkButtonNode);

    return todoNode;
  };

  // bind create todo form
  // set up addTodo function to add new tasks (objects) to the state array by clicking submit
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // prevent submit button to refresh page on each click
      event.preventDefault();
      // set up description variable to access the users input string into the text box
      var description = event.target.description.value;

      // create a new object when user types in text and clicks submit
      // object id uses generateId function, var description and a pre-defined done status (false)

      var newObject = {
        id: todoFunctions.generateId(),
        description: description,
        done: false
      };
      // create newState variable using our addTodo function which pushes new objects into our state arrays
      var newState = todoFunctions.addTodo(state, newObject);
      // newState array uses the update version which in turn uses the render function
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
