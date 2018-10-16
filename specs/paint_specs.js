const assert = require("assert");
const Paint = require("../paint.js");

describe('Paint', function () {

  let paint;

  beforeEach(function(){
    paint = new Paint(10);
  });

  it("should have a number of liters", function(){
    const actual = paint.amount;
    assert.strictEqual(actual, 10);
  });

  it("should not be empty", function(){
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, "No");
  });

  it("should be empty", function(){
    paint.amount = 0
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, "Yes");
  });

  it("should have been emptied", function(){
    paint.empty();
    const actual = paint.checkIfEmpty();
    assert.strictEqual(actual, "Yes");
  });



});
