$(document).ready(function () {
  window.dancers = [];
  // console.log(window);
  $('.addDancerButton').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // console.log('init: ', this);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName);
    // get the maker function for the kind of dancer we're supposed to make
    // window[BlinkyDancer]
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log('BlinkyDancer Maker:', window[dancerMakerFunctionName]);
    // console.log(dancerMakerFunction);
    // make a dancer with a random position


    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      500
    );
    // var dancer = new dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   1000
    // );
    // old time= Math.random() * 1000
    // console.log('dancer: ', dancer);
    dancer.step();
    dancer.setPosition(dancer.top, dancer.left);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

  });

  $('.lineUpButton').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.addClass('lined-up');
      window.dancers[i].lineUp(100, (100 + i * 100));
    }

  });


  $('.scatterButton').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.removeClass('lined-up');
    }
  });
  // $('#blinky-dancer').on('mouseover', function(event) {
  //   console.log('mouseover');

  //   // var styleSettings = {
  //   //   border: '10px solid blue',
  //   //   // 'border-color': borderColor
  //   // };
  //   // $('#blinky-dancer').css('border', '4px solid blue');
  //   // console.log(this, 'blinky dancer mouse over');
  // });

});
