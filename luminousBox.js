$(document).ready(function(){
  'use strict';

 // Kod för plugin
  


 
$('.videobox').click(function() {
 var windowHeight = window.innerHeight || $(window).height(), 
        windowWidth  = window.innerWidth || $(window).width(),
        videoTitle = $(this).attr('text');
               

$('<div id="overlay"></div>')
.css('opacity', '0')
.animate({'opacity' : '0.5'}, 'slow')
.appendTo('body');

$('<div id="videobox"></div>')
.hide()
.appendTo('body');

$('<iframe width="700" height="394" frameborder="0" allowfullscreen>')
.attr('src', $(this).attr('src'))
.load(function() {
$('#videobox')
.css({
'top': (windowHeight - $('#videobox').height()) / 2,
'left': (windowWidth - $('#videobox').width()) / 2
})
.fadeIn(300);
})
.appendTo('#videobox');

$('<p class="caption">').text(videoTitle)
.appendTo('#videobox');

$('<div id="exit"><a href="#">close X</a></div>').appendTo('#videobox');

$('#exit, #overlay').click(function() {
$('#overlay, #videobox')
.fadeOut(300, function(){ 
    $(this).remove();
});
return false;
});
return false;		
});
  
  
});