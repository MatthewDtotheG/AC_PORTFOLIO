
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
      
      if(windowWidth < 950){
        $('#nav-icon3').removeClass('open')
        $('#NAVMENU').fadeOut(300)
     }

  });
});





//ANCHOR TAGS END ===============================




// BACKUP      =========================================


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

// BACKUP END      ====================================



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

$(document).ready(function(){
$("#nav-icon3").click(function () {
    $("body").toggleClass("FIXED");
  });
});


// COLLAPSIBLE NAV MENU END ===============================


$(document).ready(function(){
  if( isMobile.iOS() || isMobile.Android() ){
    $('Instagram.php').attr('href', 'https://www.instagram.com/andymancann');
  }
});




// SCROLL ANIMATION ===============================

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);



$(window).scroll(function(event) {
  
  $(".module").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});


var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

// SCROLL ANIMATION END         ===============================
