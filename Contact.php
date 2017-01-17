<!DOCTYPE html>
<html>
  <head>
  	<title>Contact - ANDY CORBETT</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="" />
    <meta property="og:description" content="" />
    <meta property="og:title" content="ANDY CORBETT" />
    <meta property="og:url"content="" />
    <meta property="og:type"content="website" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Montserrat|Yrsa:300" rel="stylesheet" type="text/css">
    <link href="css/APPLICATION.css" rel="stylesheet" media="screen">
  </head>


<body>


<div class="sidebar">

        <a href="/">
        <img class="LOGO1" src="img/LOGO.png">
        </a>

  <div id="NAVMENU">
          <div class="nav-mobile-wrap">
            <a class="MENUITEM" href="/">Portfolio</a> <span></span>
            <a class="MENUITEM" href="/Instagram.php">Instagram</a> <span></span>
            <a class="MENUITEM" href="/About.php">About</a> <span></span>
            <a class="MENUITEM" href="/Contact.php">Contact</a> <span></span>
  </div>
    

          <a class="toggle-nav">
            <div id="nav-icon3">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
  </div>


    <ul class="SocialWrap">
                <a href='https://twitter.com/CACorbett500'>
                  <img class="social" src="img/twitter.png">
                </a>
                <a href='https://www.facebook.com/andy.corbett.180'>
                  <img class="social" src="img/fb.png">
                </a>
                <a href='https://www.instagram.com/andymancann'>
                  <img class="social" src="img/insta.png">
                </a>
                <a href="mailto:cacorbett500@gmail.com">
                  <img class="social" src="img/email.png">
                </a>
    </ul>

</div>


<div class="NEW2">

<div class="BREAKTOP"></div>
      <div class="PANDC">
        <h2>CONTACT</h2>

        <p>
            Say Hello! 
        </p>

        <form id="ajax-contact" method="post" action="mailer.php">
        
        <div class="FORM">
          MESSAGE*<br>
          <textarea id="message" name="message" class="MESSAGE" required></textarea><br>   
        </div>

        <div class="FORM0">
          NAME*<br>      
          <input type="text" id="name" name="name" required><br>
        </div>

        <div class="FORM1">
          E-MAIL*
          <input type="text" id="email" name="email" required><br>
          <input class="SEND" type="submit" value="SEND">
        </div>

        
        
      </form>

      <div id="form-messages"></div>
      </div>

    

<div class="BREAK"></div>

  

</div>







<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/3.0.3/handlebars.runtime.min.js"></script>
<script src="js/jquery.instashow.min.js"></script>
<script src="js/modaal.js"></script>
<script src="js/script.js"></script>



</body>
</html>
  