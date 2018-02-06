<?php include (TEMPLATEPATH. '/headsite.php'); ?>
<body>
<div class="home-header content-header">
  <div class="header-items">
    <a href="<?php echo get_home_url(); ?>">
        <img class="img-responsive gitei-logo" src="<?php bloginfo('template_url')?>/img/logo_GITEI.png">
    </a>
    <button type="button" class="btn btn-info btn-lg btn-menu" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-menu-hamburger"></span></button>
    <?php include (TEMPLATEPATH. '/modalmenu.php'); ?>
  </div>
  <div class="social-bar">
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-linkedin"></a>
    <a href="#" class="fa fa-twitter"></a>
  </div>
</div>
<label class="breadcrumb"><?php the_breadcrumb(); ?></label>
