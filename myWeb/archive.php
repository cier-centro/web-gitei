<?php include (TEMPLATEPATH. '/header2.php'); ?>

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-8">
      <div class="row">
          <h2><?php single_cat_title( $prefix = '', $display = true) ?></h2>
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
                      <a class="title" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                      <label class="subtitle"><?php the_date(); ?> </label>
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

<?php get_sidebar(); ?>
<?php previous_posts_link('<< Anterior')?>
<?php next_posts_link('Siguiente >>')?>

<?php get_footer(); ?>
