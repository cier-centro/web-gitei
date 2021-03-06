<?php
register_nav_menus( array(
  'menu' => 'Menu principal',
  'menu2' => 'Menu complementario',
  'menuCont' => 'Menu de Contenido',
  'menuContOp' => 'Menu de Contenido Opcional',
));

add_theme_support('post-thumbnails');
//add_image_size('list_articles_thumbs', 477, 215, true);

register_sidebar(array(
  'name' => 'Principal',
  'before_widget' => '<section class="video-widget">',
  'after_widget' => '</section>',
));

function the_breadcrumb() {
   if (!is_home()) {
       echo '<a class="home-link" href="';
       echo get_option('home');
               echo '">';
       bloginfo('name');
       echo "</a>&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp";
       if (is_category() || is_single()) {
           the_category('title_li=');
           if (is_single()) {
               echo "&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp";
               the_title();
           }
       } elseif (is_page()) {
          echo the_title();
       }
   }
}
?>
