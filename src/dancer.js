// Creates and returns a new  object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class=""></span>');
  this.step();
};

Dancer.prototype.step = function() {
  console.log(this);
  var that = this;
  setTimeout(function () {
    console.log('inside: ', that);
    // somehow we need this to reference Dancer and not Window
    that.step.call(that);
  }, this.timeBetweenSteps);

};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};



// From ogDancer.js

// dancer.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(dancer.step, timeBetweenSteps);
// };
// dancer.step();


// From ogBlinkyDancer.js
// var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

// var oldStep = blinkyDancer.step;

// blinkyDancer.step = function() {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   blinkyDancer.$node.toggle();
// };