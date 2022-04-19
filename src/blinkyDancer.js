var BlinkyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $("<img id='blinky-dancer' src='../assets/blinky-dancer.png'>");
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
