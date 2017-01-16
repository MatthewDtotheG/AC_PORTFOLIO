
//ANCHOR TAGS ===============================

$(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var windowWidth = $(window).width();

      $('html, body').stop().animate({  
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
      
      if(windowWidth < 769){
        $('#nav-icon3').removeClass('open')
        $('#NAVMENU').fadeOut(300)
     }

  });
});



//ANCHOR TAGS END ===============================




// FADE IN  =========================================

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 550) {
    $("#BACKUP").fadeIn();
  } else {
    $("#BACKUP").fadeOut();
  }
});

// FADE IN END ======================================








  $('.image').modaal({
    type: 'image',
    background: 'white',
    overlay_opacity: '0.8',

});




// COLLAPSIBLE NAV MENU ===============================


$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});

$('#nav-icon3').click(function() {
    $('#NAVMENU').fadeToggle(300);
});



// COLLAPSIBLE NAV MENU END ===============================







