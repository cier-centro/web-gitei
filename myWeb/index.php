<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-8">
      <div class="row">
          <?php query_posts("category_name=Cursos Virtuales&orderby=title&order=asc"); ?>
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <div class="col-xs-12 col-md-6" data-animate-scroll='{
                    "alpha": "0",
                    "duration": "2",
                    "rotationY":"-45",
                    "z":"-30"}'>
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
      <div class="row">
          <div class="col-xs-12">
            <?php query_posts("category_name=Cursos Virtuales 2&orderby=title&order=asc"); ?>
            <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

              <div class="row horizontal-item" data-animate-scroll='{
                    "alpha": "0",
                    "duration": "2",
                    "rotationX":"45",
                    "z":"-30"}'>
                  <div class="col-xs-12 col-md-6 item-text">
                    <label class="group"><?php the_category(); ?></label>
                    <a class="title" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    <label class="subtitle"><?php the_date(); ?> </label>
                    <p><?php the_excerpt(); ?>
                    </p>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div class="thumb">
                      <a href="<?php the_permalink(); ?>">
                          <?php if ( has_post_thumbnail() ) { the_post_thumbnail('list_articles_thumbs'); }?>
                      </a>
                    </div>
                  </div>
              </div>

            <?php endwhile; else: ?>

            <h1>No se encontraron Artículos</h1>
            <?php endif; ?>

          </div>
      </div>
    </div>

<?php get_sidebar(); ?>

<?php previous_posts_link('<< Anterior')?>
<?php next_posts_link('Siguiente >>')?>

<?php include (TEMPLATEPATH. '/videosection.php'); ?>

<?php get_footer(); ?>
