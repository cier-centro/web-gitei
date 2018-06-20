<?php get_header(); ?>
<div class="container">
    <div class="row">
      <div class="col-xs-12 col-lg-9">
        <div class="row home-articles event-articles">
            <?php
                 $index = 0;
                 $postslist = get_posts("category_name=Eventos&orderby=title&order=asc");
                 foreach ($postslist as $post) : setup_postdata($post);
             ?>
             <div class="col-xs-12 col-md-6 home-article event-article">
                 <div class="vertical-item">
                     <div class="thumb">
                         <a href="<?php the_permalink(); ?>">
                            <?php if ( has_post_thumbnail() ) { the_post_thumbnail(); }?>
                         </a>
                     </div>
                     <div class="item-text">
                       <label class="group"><?php the_category(); ?></label>
                       <label class="date"><?php the_date(); ?> </label>
                       <a class="title" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                       <p><?php the_excerpt(); ?>
                       </p>
                     </div>
                 </div>
             </div>

              <?php endforeach; ?>
        </div>
        <div class="row home-articles" >
              <?php echo do_shortcode('[ajax_load_more container_type="div" post_type="post" posts_per_page="3" category="nuestros-proyectos" order="ASC" orderby="title" scroll="false" button_label="Ver más"]'); ?>
        </div>
      </div>

<?php get_sidebar(); ?>

<?php include (TEMPLATEPATH. '/videosection.php'); ?>

<?php get_footer(); ?>
