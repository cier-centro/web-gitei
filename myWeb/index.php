<?php get_header(); ?>
<div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-8">
        <div class="row" >
              <?php echo do_shortcode('[ajax_load_more container_type="div" post_type="post" posts_per_page="1" category="cursos-virtuales,cursos-virtuales-2" order="ASC" orderby="title" scroll="false" button_label="Ver más"]'); ?>
        </div>
      </div>

<?php get_sidebar(); ?>

<?php previous_posts_link('<< Anterior')?>
<?php next_posts_link('Siguiente >>')?>

<?php include (TEMPLATEPATH. '/videosection.php'); ?>

<?php get_footer(); ?>
