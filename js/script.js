
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





//SCROLL ANIMATION ===============================

var fooReveal = {
  origin : 'bottom',
  delay    : 100,
  distance : '90px',
  easing   : 'ease-in-out',
  
};

window.sr = ScrollReveal();
sr.reveal('.module', fooReveal);


//SCROLL ANIMATION END ===============================





// BACKUP      =========================================


 
        $("#BACKUP").hide();                  
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 500) {
                $('#BACKUP').fadeIn();
            } else {
                $('#BACKUP').fadeOut();
            }
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


// MODAL ===============================


$('.image').modaal({
    type: 'image',
    background: 'white',
    overlay_opacity: '0.8',

});

// MODAL END ===============================


// COLLAPSIBLE NAV MENU ===============================


$('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });


$('#nav-icon3').click(function() {
    $('#NAVMENU').fadeToggle(300);
});



$("#nav-icon3").click(function () {
    $(".sidebar").toggleClass("FIXED");
  });



// COLLAPSIBLE NAV MENU END ===============================




