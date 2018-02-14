<?php include (TEMPLATEPATH. '/header2.php'); ?>

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-9">
      <div class="row">
        <div class="col-xs-12">
          <div class="vertical-item">
              <div class="item-text">
                  <h1 class="title"><?php single_cat_title( $prefix = '', $display = true) ?></h1>
                  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                    <div class="col-xs-12 col-md-6">
                        <div class="vertical-item">
                              <div class="thumb">
                                <a href="<?php the_permalink(); ?>">
                                    <?php if ( has_post_thumbnail() ) { the_post_thumbnail('list_articles_thumbs'); }?>
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

                  <?php endwhile; else: ?>

                  <h1>No se encontraron Artículos</h1>
                  <?php endif; ?>
              </div>
          </div>
        </div>
      </div>
    </div>

<?php get_sidebar(); ?>
<?php previous_posts_link('<< Anterior')?>
<?php next_posts_link('Siguiente >>')?>

<?php get_footer(); ?>
