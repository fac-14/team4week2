// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  var addButtonNode = document.createElement('button');
  addButtonNode.addEventListener('click', function(){
    console.log('helloworld');
    //DOES NOT WORK ATM
    container.activeElement = addTodoForm.firstChild;
    //window.Location = 'www.google.com';
    //window.Location = addTodoForm;
  })
  container.appendChild(addButtonNode);
  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // addButtonNode.addEventListner('click', function(event){
    //   window.location = addTodoForm;
    // });
    // add span holding description
    todoNode.appendChild(document.createTextNode(todo.description));

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markUnmarkButtonNode = document.createElement('button');
    markUnmarkButtonNode.addEventListener('click', function(event){
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markUnmarkButtonNode);

    // add classes for css
    deleteButtonNode.className = 'delButton';

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      var description = '?'; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = []; // ?? change this!
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
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
//container.replaceChild(todoListNode, container.firstChild);

  //this will position add button as the first element  and then
  // put the todoList as the second element
    container.replaceChild(addButtonNode, container.firstChild);
    container.replaceChild(todoListNode, container.childNodes[1]);
    //container.atodoListNode.ppendAfter(element);
    addButtonNode.className = 'addButton';
  };

  if (container) renderState(state);
})();
//console.log('here');
