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
    <img class="img-responsive gitei-logo">
    <button type="button" class="btn btn-info btn-lg btn-menu" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-menu-hamburger"></span></button>
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">
              <img class="img-responsive gitei-logo-dark">
            </h4>
          </div>
          <div class="modal-body">
              <?php wp_nav_menu(
                array(
                  'container' => false,
                  'items_wrap' => '<ul id="main-menu" class="row">%3$s</ul>',
                  'theme_location' => 'menu'
                )); ?>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Buscar...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
            <?php wp_nav_menu(
              array(
                'container' => false,
                'items_wrap' => '<ul class="links-container">%3$s</ul>',
                'theme_location' => 'menu2'
              )); ?>
          </div>
        </div>

      </div>
    </div>
    <iframe src="<?php bloginfo('template_url')?>/flip-slider/index.html" class="slider open"></iframe>
    <iframe src="<?php bloginfo('template_url')?>/mouse-orbit/index.html" class="slider closed"></iframe>
    <div class="header-links">
      <div class="links-container">
        <a href="#" class="btn btn-link" role="button" onclick="changeSlider(0)">Lo que más nos gusta</a>
        <div class="vertical-separator"></div>
        <a href="#" class="btn btn-link" role="button" onclick="changeSlider(1)">Nos conocen por</a>
      </div>
    </div>
  </div>
  <div class="social-bar">
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-linkedin"></a>
    <a href="#" class="fa fa-twitter"></a>
  </div>
</div>
