<?php get_header(); ?>
<div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-9">
        <div class="row home-articles" >
              <?php echo do_shortcode('[ajax_load_more container_type="div" post_type="post" posts_per_page="3" category="destacados" order="ASC" orderby="title" scroll="false" button_label="Ver más"]'); ?>
        </div>
      </div>

<?php get_sidebar(); ?>

<?php previous_posts_link('<< Anterior')?>
<?php next_posts_link('Siguiente >>')?>

<?php include (TEMPLATEPATH. '/videosection.php'); ?>

<?php get_footer(); ?>
