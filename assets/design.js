$(function () {
  var log = console.log.bind(console);
  var $win = $(window);

  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
  log('top');

  var scaleToWhite = chroma.scale(['#1e1e1e', '#fff']);
  var scaleToBlack = chroma.scale(['#fff', '#fff', '#1e1e1e']).domain([0, 0.6, 1]);

  $(window).on('scroll', function () {
    var offset = $win.scrollTop();

    var percent = Math.min(offset / 400, 1);
    // log(offset, percent);
    // log(height, offset, percent, scale(percent).hex());
    $('body').css('background-color', scaleToWhite(percent).hex());
    $('.Hero-center, .Hero-name').css('color', scaleToBlack(percent).hex());
  });
});
