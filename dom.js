// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application

(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var addTodoForm = document.getElementById("add-todo");

  var state = [
    { id: -3, description: "first todo", done: false },
    { id: -2, description: "second todo", done: true },
    { id: -1, description: "third todo", done: false }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo

  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");

    // addButtonNode.addEventListner('click', function(event){
    //   window.location = addTodoForm;
    // });
    // add span holding description
    todoNode.appendChild(document.createTextNode(todo.description));

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markUnmarkButtonNode = document.createElement("button");



    markUnmarkButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);

      update(newState);
    });

    if(todo.done == true){
      markUnmarkButtonNode.className = "markButton";
      todoNode.className = "line-through";
    }
    else {
      markUnmarkButtonNode.className = "unMarkButton";
    }

    todoNode.appendChild(markUnmarkButtonNode);

    // add classes for css
    deleteButtonNode.className = "delButton";

//markUnmarkButtonNode.className = "unMarkButton";

    return todoNode;
  };
  var sortButton = document.createElement("button");
  sortButton.innerHTML = "sort by done";
  sortButton.addEventListener("click", function(event) {
    console.log("strifsafas");
    var newState = todoFunctions.sortTodos(state);
    update(newState);
  });
  container.appendChild(sortButton);

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log(event);

      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      var description = event.target.description.value;

      console.log(description);

      // use unique id
      // use addTodo
      // state = todos
      // description = newTodo

      var newObject = {
        id: todoFunctions.generateId(),
        description: description,
        done: false
      };

      console.log(state);

      var newState = todoFunctions.addTodo(state, newObject);
      update(newState);

      // hint: todoFunctions.addTodo
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

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
//console.log('here');
