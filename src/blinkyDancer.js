var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
  // this.callCount = 0;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // console.log('dancer.p.step: ', Dancer.prototype.step);
  // console.log(this);
  Dancer.prototype.step.call(this);

  // this.callCount++;
  // let callCount = this.callCount;
  this.$node.toggle();
};