
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

$(document).ready(function() {

  $('#IMGUP a').bind('mouseover', function(){
      $(this).parent('a').css({position:'relative'});
      var img = $(this).children('img');
      $('<div />').text('FUCK YEAH').css({
          'height': img.height(),
          'width': img.width(),
          'background-color': 'orange',
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'opacity': 0.0
      }).bind('mouseout', function(){
          $(this).fadeOut('fast', function(){
              $(this).remove();
          });
      }).insertAfter(this).animate({
          'opacity': 0.5
      }, 'fast');
  });

});



// FADE IN  =========================================


$(document).ready(function(){  
        $("#BACKUP").hide();                  
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 500) {
                $('#BACKUP').fadeIn();
            } else {
                $('#BACKUP').fadeOut();
            }
        });
    });

// FADE IN END ====================================



$(function(){
    var current = location.pathname;
    $('#NAVMENU a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('MENUITEM_ON');
        }
    })
});





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







