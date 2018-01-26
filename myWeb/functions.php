<?php
register_nav_menus( array(
  'menu' => 'Menu principal',
  'menu2' => 'Menu complementario',
));

add_theme_support('post-thumbnails');
add_image_size('list_articles_thumbs', 477, 215, true);

register_sidebar(array(
  'name' => 'Principal',
  'before_widget' => '<section class="video-widget">',
  'after_widget' => '</section>',
));
?>
