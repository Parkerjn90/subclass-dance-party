// Creates and returns a new  object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
};

Dancer.prototype.step = function () {
  // console.log(this);
  var that = this;
  setTimeout(function () {
    // console.log('inside: ', that);
    that.step.call(that);
  }, this.timeBetweenSteps);

};

Dancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  // this.$node.addClass('lined-up');
};



// Dancer.prototype.mouseOver = function(borderColor) {
//   var styleSettings = {
//     border: '10px solid blue',
//     // 'border-color': borderColor
//   };
//   this.$node.css(styleSettings);
// };

// var dancer1 = new Dancer(2, 3, 100);

// dancer 1 = {
//   top: top,
//   left: left,
//   timeBetweenSteps: timeBetweenSteps,
//   $node: $('span....'),
//   (prototype) step: function(),
//   (prototype) setPosition: function()
// }