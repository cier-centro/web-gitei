<?php include (TEMPLATEPATH. '/headsite.php'); ?>
<body>
<div class="home-header">
  <div class="flip-slider">
    <a href="<?php echo get_home_url(); ?>">
        <img class="img-responsive gitei-logo" src="<?php bloginfo('template_url')?>/img/logo_GITEI.png">
    </a>
    <button type="button" class="btn btn-info btn-lg btn-menu" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-menu-hamburger"></span></button>
    <?php include (TEMPLATEPATH. '/modalmenu.php'); ?>
    <iframe src="<?php bloginfo('template_url')?>/flip-slider/index.html" class="slider open"></iframe>
    <iframe src="<?php bloginfo('template_url')?>/mouse-orbit/index.html" class="slider closed"></iframe>
    <div class="header-links">
      <div class="links-container">
        <ul class="nav nav-tabs">
          <li><a href="#" class="selected" role="button" onclick="changeSlider(this, 0)">Lo que más nos gusta</a></li>
          <li><a href="#" role="button" onclick="changeSlider(this, 1)">Nos conocen por</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="social-bar">
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-linkedin"></a>
    <a href="#" class="fa fa-twitter"></a>
  </div>
</div>
