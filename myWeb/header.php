<?php include (TEMPLATEPATH. '/headsite.php'); ?>
<body>
<a name="page-up"></a>
<?php include (TEMPLATEPATH. '/unalheader.php'); ?>
<div class="home-header">
  <div class="flip-slider">
    <a href="<?php echo get_home_url(); ?>">
        <img class="img-responsive gitei-logo separator-logo hidden-xs" src="<?php bloginfo('template_url')?>/img/logo_separator.png">
        <img class="img-responsive gitei-logo visible-xs-block" src="<?php bloginfo('template_url')?>/img/logo_name.png">
    </a>
    <button type="button" class="btn btn-info btn-lg btn-menu" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-menu-hamburger"></span></button>
    <div class="slider-container">
        <div class="slider open">
            <?php echo do_shortcode('[masterslider id="1"]') ?>
        </div>
        <div class="slider closed">
            <iframe class="slider-iframe" style="height:100%; width:100%; border:none;"></iframe>
        </div>
    </div>
    <div class="header-links">
      <div class="links-container">
        <ul class="nav nav-tabs">
          <li><a href="#" class="selected" role="button" onclick="changeSlider(this, 0)">Nuestras líneas de acción</a></li>
          <li><a href="#" role="button" onclick="changeSlider(this, 1)">Nuestra experiencia</a></li>
        </ul>
      </div>
    </div>
  </div>
  <?php include (TEMPLATEPATH. '/modalmenu.php'); ?>
  <?php include (TEMPLATEPATH. '/socialbar.php'); ?>
</div>
