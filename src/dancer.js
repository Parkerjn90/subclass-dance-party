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


Dancer.prototype.checkCollision = function(top, left) {
  let nodeY = top + 30;
  let nodeX = left + 30;

  // console.log(nodeX, nodeY);

  window.dancers.forEach(function(dancer) {
    let dancerX = dancer.$node.position().left + 30;
    let dancerY = dancer.$node.position().top + 30;
    // console.log(dancerX, dancerY);
    // console.log(dancer.$node.attr('class'), dancerX, dancerY);
    // console.log(dancer.$node.width());

    let a = nodeX - dancerX;
    let b = nodeY - dancerY;
    // console.log(a, b);
    // c = square root of a^2 + b^2
    let c = Math.sqrt(Math.pow((a), 2) + Math.pow((b), 2));
    c = Math.floor(c);
    if (c <= 80 && c !== 0) {
      console.log('COLLISION!', c);
      dancer.$node.css('border', '10px solid green');
    } else {
      dancer.$node.css('border', '0');
    }

  });

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