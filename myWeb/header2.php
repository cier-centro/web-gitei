<?php include (TEMPLATEPATH. '/headsite.php'); ?>
<?php include (TEMPLATEPATH. '/unalheader.php'); ?>
<body>
<a name="page-up"></a>
<div class="home-header content-header">
  <div class="header-items">
    <a href="<?php echo get_home_url(); ?>">
      <img class="img-responsive gitei-logo separator-logo hidden-xs" src="<?php bloginfo('template_url')?>/img/logo_separator.png">
      <img class="img-responsive gitei-logo visible-xs-block" src="<?php bloginfo('template_url')?>/img/logo_name.png">
    </a>
    <button type="button" class="btn btn-info btn-lg btn-menu" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-menu-hamburger"></span></button>
    <?php include (TEMPLATEPATH. '/modalmenu.php'); ?>
  </div>
  <?php include (TEMPLATEPATH. '/socialbar.php'); ?>
</div>
