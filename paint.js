const Paint = function (amount){
  this.amount = amount;
};

Paint.prototype.checkIfEmpty = function () {
  if (this.amount === 0) {
    return "Yes"
  } else {
    return "No"
  };
};

Paint.prototype.empty = function () {
  this.amount = 0;
};


module.exports = Paint;
