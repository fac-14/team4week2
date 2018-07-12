var test = require("tape");
var logic = require("./logic");

// testing for 1. function called addTodo

// tests A: is pushing an toDo task into the toDos-array working?

test("array push working?", function(t) {
  var actual = logic.addTodo([], 1);
  var expected = [1];
  t.deepEqual(actual, expected, "addTodo test");
  t.end();
});

// tests B: Can the toDo item be pushed into the toDo-array without changing it?
// >> using Array.concat() to push item to the end and return new array

test("concat new item to existing array", function(t) {
  var actual = logic.addTodo([1], 2);
  var expected = [1, 2];
  t.deepEqual(actual, expected, "addTodo test");
  t.end();
});

// testing for 2. function called markTodo
// markToDo function takes 2 inputs: the toDos array and a number which should access the toDo-task within the array and change its status (either done: true or done: false)

test("markTodo toggle", function(t) {
  var actual = logic.markTodo(
    [
      { id: 0, description: "make tea", done: false },
      { id: 1, description: "make eggs", done: true }
    ],
    0
  );
  var expected = [
    { id: 0, description: "make tea", done: true },
    { id: 1, description: "make eggs", done: true }
  ];
  t.deepEqual(expected, actual, "addTodo test");
  t.end();
});

test("test for delete", function(t) {
  var todos = [
    { id: 0, description: "make tea", done: false },
    { id: 1, description: "make eggs", done: true }
  ];
  var actual = logic.deleteTodo(todos, 0);
  var expected = [{ id: 1, description: "make eggs", done: true }];
  t.deepEquals(actual, expected, "to do: make tea should be deleted");
  t.end();
});

//////
test("test for sort", function(t) {
var todos = [
{ id: 0, description: "make tea", done: false },
{ id: 1, description: "make eggs", done: true },
{ id: 1, description: "make breakfast", done: false }
];
var actual = logic.sortTodos(todos);
var expected = [
{ id: 0, description: "make tea", done: false },
{ id: 1, description: "make breakfast", done: false },
{ id: 1, description: "make eggs", done: true }
];
t.deepEquals(actual, expected, "to do: false items should be switched to");
t.end();
});
