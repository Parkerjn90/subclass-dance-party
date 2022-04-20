var BreakyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

  this.position = 0;

  this.$node = $("<img id='breaky-dancer' class='dancer' src='../assets/breaky-dancer.png'>");
  // this.step();
};

BreakyDancer.prototype = Object.create(Dancer.prototype);
BreakyDancer.prototype.constructor = BreakyDancer;

BreakyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
  // for (this.position = 0; this.position <= 100; this.position += 1) {
  //   console.log(this.position);
  // }
  // for (this.position = 100; this.position >= 0; this.position -= 1) {
  //   console.log(this.position);
  // }
  // console.log(this.setPosition);
  if (!this.$node.hasClass('lined-up')) {
    this.top = Math.random() * (200 - 10) + 10;
    // console.log(this.position);
    this.setPosition(this.top, this.left);
  }
};