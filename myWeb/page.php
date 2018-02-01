<?php include (TEMPLATEPATH. '/header2.php'); ?>

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-8">
      <div class="row">
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <div class="col-xs-12">
                <div class="vertical-item content-section">
                      <div class="thumb">
                            <?php if ( has_post_thumbnail() ) { the_post_thumbnail(); }?>
                      </div>
                    <div class="item-text">
                      <label class="group"><?php the_category(); ?></label>
                      <h1 class="title"><?php the_title(); ?></h1>
                      <br>
                      <p><?php the_content(); ?>
                      </p>
                    </div>
                </div>
            </div>

          <?php endwhile; else: ?>

          <h1>No se encontraron Artículos</h1>
          <?php endif; ?>
      </div>
    </div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>