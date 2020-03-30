// const flightPath = {
//   curviness: 1.25,
//   autoRotate: true,
//   values: [
//     {x: 100, y: -20},
//     {x: 300, y: 10},
//     {x: 500, y: 100},
//     {x: 750, y: -100},
//     {x: 350, y: -50},
//     {x: 600, y: 100},
//     {x: 800, y: 0},
//     {x: window.innerWidth, y: -250}
//   ]
// }
//
// const flightPathTwo = {
//   curviness: 1.25,
//   autoRotate: true,
//   values: [
//     {x: 300, y: -20},
//     {x: 600, y: 10},
//     {x: 400, y: 100},
//     {x: 750, y: -100},
//     {x: 350, y: -50},
//     {x: 600, y: 100},
//     {x: 800, y: 0},
//     {x: window.innerWidth, y: -250}
//   ]
// }
//
// const tween = new TimelineLite();
//
// tween.add(
//   TweenLite.to('.paper-plane', 1, {
//     bezier: flightPath,
//     ease: Power1.easeInOut
//   })
// );
//
// tween.add(
//   TweenLite.to('.paper-plane', 1, {
//     bezier: flightPathTwo,
//     ease: Power1.easeInOut
//   })
// );
// const controller = new ScrollMagic.Controller();
//
// const scene = new ScrollMagic.Scene({
//   triggerElement: '.animation',
//   duration: 5000,
//   triggerHook: 0,
// })
//
// .setTween(tween)
// .addIndicators()
// .setPin('.animation')
// .addTo(controller);


let scenes = [];

// init controller
var controller = new ScrollMagic.Controller();

$('.slide').each(function(index) {
  var trigger = '#slide-' + index + ' .trigger';
  var audio = '#slide-' + index + ' audio';


  scenes[index] = new ScrollMagic.Scene({
      triggerElement: trigger,
      triggerHook: 0,
      duration: '100%'
    })
    .addIndicators({
      name: trigger,
      colorEnd: "#00FFFF"
    })

    .on('enter', function() {
      let audio = $('audio')
      console.log('Playing audio at index', index)
      audio[index].play();
    })
    .on('leave', function() {
      console.log('Leave' + trigger);
    })
    .addTo(controller);

});
