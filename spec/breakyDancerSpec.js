describe('breakyDancer', function () {

  var breakyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    breakyDancer = new BreakyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(breakyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a setPosition function that gets called in step', function () {
    sinon.spy(breakyDancer, 'setPosition');
    breakyDancer.step();
    expect(breakyDancer.setPosition.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(breakyDancer, 'step');

      expect(breakyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);
      expect(breakyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(breakyDancer.step.callCount).to.be.equal(2);
    });
  });
});

