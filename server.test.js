const add = require("./server");
const { assert } = require("chai");

test("Add works", () => {
  const a = add(2, 3);
  assert(a).equals(5);
});
