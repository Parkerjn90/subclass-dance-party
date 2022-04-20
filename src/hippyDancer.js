var HippyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $("<img id='hippy-dancer' class='dancer' src='../assets/hippy-dancer.png'>");
  // this.step();
};

HippyDancer.prototype = Object.create(Dancer.prototype);
HippyDancer.prototype.constructor = HippyDancer;



HippyDancer.prototype.step = function() {


  Dancer.prototype.step.call(this);
  Dancer.prototype.checkCollision(this.top, this.left);

  // this.$node.toggle();
  if (!this.$node.hasClass('lined-up')) {
    this.left = Math.random() * (500 - 10) + 10;
    // console.log(this.position);
    this.setPosition(this.top, this.left);
  }
};