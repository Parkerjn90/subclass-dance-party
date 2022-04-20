describe('hippyDancer', function () {

  var hippyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    hippyDancer = new HippyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(hippyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a setPosition function that gets called in step', function () {
    sinon.spy(hippyDancer, 'setPosition');
    hippyDancer.step();
    expect(hippyDancer.setPosition.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(hippyDancer, 'step');

      expect(hippyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      //clock.tick(timeBetweenSteps);
      expect(hippyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(hippyDancer.step.callCount).to.be.equal(2);
    });
  });
});

