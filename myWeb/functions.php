<?php
register_nav_menus( array(
  'menu' => 'Menu principal',
  'menu2' => 'Menu complementario',
));

add_theme_support('post-thumbnails');
add_image_size('slider_thumbs', 470, 300, true);
add_image_size('list_articles_thumbs', 477, 215, true);
?>
