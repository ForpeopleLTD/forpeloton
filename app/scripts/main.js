$('document').ready(function(){

  // Set animation on home page
  motifAnim();

  });


function motifAnim(){

    var delay = 250;
    var textArray = [
        { breakdown: ['A','L','','','','L',' ','','E','Z','','','','A','L','L','','E','Z',''] }
        ]

    // loop through first array and generate spans with content
    for (var i = 0; i < textArray[0].breakdown.length; i++){
        $('.motif').append('<span>'+textArray[0].breakdown[i]+'</span>')
    }

    window.setTimeout(function(){
        $('.motif').addClass('anim-in');
    }, delay);

}
