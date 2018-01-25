<!DOCTYPE html>
<html lang="es">
<head>
  <title>Página de Inicio - GITEI</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url')?>">
</head>
<body>
<div class="home-header">
  <div class="flip-slider">
    <a href="<?php echo get_home_url(); ?>">
        <img class="img-responsive gitei-logo">
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
