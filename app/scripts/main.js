var $motif = $('.motif');
var $down = $('.down');

$('document').ready(function(){
  // populate text fro array
  populateMotif();
  // Set animation on home page
  motifAnim();
});

function populateMotif(){
  var textArray = [
    { breakdown: ['A','L','','','','L',' ','','E','Z','','','','A','L','L','','E','Z',''] }
    ]
  // loop through first array and generate spans with content
  for (var i = 0; i < textArray[0].breakdown.length; i++){
    $motif.append('<span>'+textArray[0].breakdown[i]+'</span>')
  }
}

function motifAnim(){

  var delay = 250;
    window.setTimeout(function(){
        $motif.addClass('anim-in');
        $motif.fadeIn('anim-in');
    }, delay);

}

$motif.on('click', function(){
  $motif.fadeOut('10');
  var delay = 250;
    window.setTimeout(function(){
      removeMotif();
    }, delay);

});

function removeMotif(){
    motifAnim();
}

$down.on('click', function(){
  $('body').animate({
    scrollTop: $down.offset().top+70
  },600,'easeInOutExpo');
 })
