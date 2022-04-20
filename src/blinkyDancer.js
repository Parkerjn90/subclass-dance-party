var BlinkyDancer = function (top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $("<img id='blinky-dancer' class='dancer' src='../assets/blinky-dancer.png'>");
  // this.step();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  Dancer.prototype.checkCollision(this.top, this.left);

  if (!this.$node.hasClass('lined-up')) {
    this.top = Math.random() * (200 - 10) + 10;
    this.setPosition(this.top, this.left);
    this.left = Math.random() * (500 - 10) * 10;
    this.setPosition(this.top, this.left);
  }

  this.$node.on('mouseover', function () {
    var styleSettings = {
      border: '10px solid blue'
    };
    $(this).css(styleSettings);
  });
  this.$node.on('mouseout', function () {
    var styleSettings = {
      border: '0'
    };
    $(this).css(styleSettings);
  });
};
