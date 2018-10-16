const Decorator = function(){

  this.paints = [];
};


Decorator.prototype.addPaint = function(paint){
  this.paints.push(paint);
};

Decorator.prototype.totalPaint = function () {
  let total = 0;
  for(paint of this.paints){
    total += paint.amount;
  };
  return total
};

Decorator.prototype.checkForPaint = function (room) {
  if(room.painted === "No"){

    if(this.totalPaint() < room.area){
      return "Not enough paint, go for a pint";
    }else{
      return "Go painting, you bastard!";
      room.paint();
  }}else {
    return "This room is already painted!";
  };
};

Decorator.prototype.reducePaintStock = function (room) {
  let amountToReduce = room.area;
  for (canOfPaint of this.paints){
    amountToReduce -= canOfPaint.amount;
  }
};






module.exports = Decorator;
