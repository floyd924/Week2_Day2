const assert = require("assert");
const Decorator = require("../decorator.js");
const Paint = require("../paint.js");
const Room = require("../room.js");


describe("Decorator", function(){

  let decorator;

  beforeEach(function(){
    decorator = new Decorator();
  });

  it("should start with an empty paint stock", function(){
    const actual = decorator.paints;
    assert.deepStrictEqual(actual, []);
  });

  it("should add a paint", function(){
    const red = new Paint(12);
    decorator.addPaint(red);
    const actual = decorator.paints;
    assert.deepStrictEqual(actual, [red]);
  });

  it("should calculate total of paint", function(){
    const red = new Paint(12);
    const blue = new Paint(24);
    decorator.addPaint(red);
    decorator.addPaint(blue);
    const actual = decorator.totalPaint();
    assert.deepStrictEqual(actual, 36);
  });

  it("should have enough paint", function(){
    const red = new Paint(12);
    const blue = new Paint(24);

    decorator.addPaint(red);
    decorator.addPaint(blue);

    const room = new Room(32, "No");

    const actual = decorator.checkForPaint(room);
    assert.deepStrictEqual(actual, "Go painting, you bastard!");
  });

  it("should not have enough paint", function(){
    const red = new Paint(12);
    const blue = new Paint(24);

    decorator.addPaint(red);
    decorator.addPaint(blue);

    const room = new Room(50, "No");

    const actual = decorator.checkForPaint(room);
    assert.deepStrictEqual(actual, "Not enough paint, go for a pint");
  });

  it("room already painted", function(){
    const red = new Paint(12);
    const blue = new Paint(24);

    decorator.addPaint(red);
    decorator.addPaint(blue);

    const room = new Room(50, "Yes");

    const actual = decorator.checkForPaint(room);
    assert.deepStrictEqual(actual, "This room is already painted!");
  });


});
