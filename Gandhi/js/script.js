$(".ind_mosaic").hover(function(){
  $(this).find(":button").show();
  $(this).css({
    // "width":"200",
    // "height":"200",
    "z-index":"+1",
    // "position":"relative",
    // "horizontal-anchor":"center",
    // "vertical-anchor":"rigth",
    "transform":"scale(10,10)",
    "transform-origin":"center",
    "filter":"blur(0)",
    "transition":"0.25s"
  });
}, function(){
  $(this).find(":button").hide();
  $(this).css({
    "width":"20",
    "height":"20",
    "z-index":"0",
    "transform":"scale(1,1)",
    "position":"relative",
    "filter":"blur(1px)"
  });
}
);
