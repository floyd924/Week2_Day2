const assert = require("assert");
const Room = require("../room.js");

describe ("Room", function(){
  let room;

  beforeEach(function(){
    room = new Room(32, "No");
  });

  it("should have an area", function(){
    const actual = room.area;
    assert.strictEqual(actual, 32);
  });

  it("should start not painted", function(){
    const actual = room.painted;
    assert.strictEqual(actual, "No");

  });

  it("should be painted", function(){
    room.paint()
    assert.strictEqual(room.painted, "Yes");
  });
});
