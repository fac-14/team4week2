var test = require('tape');
var logic = require('./logic');


//var updatedTodos = todoFunctions.addTodo(todos, newTodos);
//console.log(updatedTodos);


test('Example test', function(t) {
  var todos = [];
  var newTodo = { description: 'make smoothie out of things that should really be cooked' };

  var expected = [];
  expected.push(newTodo);

  var actual = logic.addTodo(todos, newTodo);
  t.deepEqual(expected, actual, 'addTodo test');
  t.end();
  //console.log(actual);

});

test('Example test', function(t) {

  var todos = [{ description: 'make tea' }];
  var makeEggs = { description: 'make eggs' };
  //var updatedTodos = todoFunctions.addTodo(todos, makeEggs);
  //use .map to copy array content into expected
  var expected = todos.map(function(val){
    return val;
  });
  expected.push(makeEggs);

  var actual = logic.addTodo(todos, makeEggs);
  t.deepEqual(expected, actual, 'addTodo ad makeEggs test');
  t.end();
  console.log(actual);

});

//test for mark-to-do
test('Test for mark-to-do', function(t){
  var todos = [
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: true},
];
  var actual = logic.markTodo(todos, 0);
  var expected = [
  {id: 0, description: 'make tea', done: true},
  {id: 1, description: 'make eggs', done: true},
];
  t.deepEquals(expected, actual, 'id[0].done value should be true');
  t.end();
  //console.log(actual);
});

test('Test for mark-to-do', function(t){
  var todos = [
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: true},
  ];
  var actual = logic.markTodo(todos, 1);
  var expected = [
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: false},
  ];
  t.deepEquals(actual, expected, 'id[1].done value should be false');
  t.end();

});

test('test for delete', function(t){
  var todos = [
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: true},
  ];
  var actual = logic.deleteTodo(todos, 0);
  var expected = [
   {id: 1, description: 'make eggs', done: true}
  ];
  t.deepEquals(actual, expected, 'to do: make tea should be deleted');
  t.end();
});
