<!DOCTYPE html>
<html lang="es">
<head>
  <title><?php
      $currentURL = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
      $homeURL = get_home_url()."/";
      $currentCategory = single_cat_title( $prefix = 'Categoría: ', $display = true);
      $pageTitle = ($currentURL == $homeURL) ? 'Página Principal' : ( (strpos($currentURL, 'category') !== false) ? $currentCategory : the_title() );
      echo $pageTitle;
  ?> | GITEI</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="<?php bloginfo('stylesheet_url')?>">
  <style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  </style>
  <?php wp_head(); ?>
</head>
