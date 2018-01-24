<?php get_header(); ?>

<div class="container">
  <div class="row">
    <div class="col-xs-12 col-md-8">
      <div class="row">
          <?php query_posts("paged=$paged"); ?>
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <div class="col-xs-12 col-md-6">
                <div class="vertical-item">
                    <div class="item-image">
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
              <div class="horizontal-item">
                  <div class="col-xs-12 col-md-6 item-text">
                    <label class="group">cursos virtuales</label>
                    <a class="title" href="#">Cinemateca Distrital</a>
                    <label class="subtitle">Percepciones del cine y tendencias en la época actual</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat rutrum erat et ornare. Praesent ac lorem ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ornare justo turpis, dictum sollicitudin tortor tempor a. Morbi maximus suscipit ligula, eget aliquet eros. Phasellus a mattis metus. Vestibulum congue odio at purus elementum tempor. In suscipit metus orci, et egestas arcu consequat et.
                    </p>
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <div class="item-image">
                    </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-xs-12 col-md-6">
              <div class="vertical-item">
                  <div class="item-image">
                  </div>
                  <div class="item-text">
                    <label class="group">cursos virtuales</label>
                    <a class="title" href="#">Cinemateca Distrital</a>
                    <label class="subtitle">Percepciones del cine y tendencias en la época actual</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat rutrum erat et ornare. Praesent ac lorem ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ornare justo turpis, dictum sollicitudin tortor tempor a. Morbi maximus suscipit ligula, eget aliquet eros. Phasellus a mattis metus. Vestibulum congue odio at purus elementum tempor. In suscipit metus orci, et egestas arcu consequat et.
                    </p>
                  </div>
              </div>
          </div>
          <div class="col-xs-12 col-md-6">
            <div class="vertical-item">
                <div class="item-image">
                </div>
                <div class="item-text">
                  <label class="group">cursos virtuales</label>
                  <a class="title" href="#">Cinemateca Distrital</a>
                  <label class="subtitle">Percepciones del cine y tendencias en la época actual</label>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat rutrum erat et ornare. Praesent ac lorem ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ornare justo turpis, dictum sollicitudin tortor tempor a. Morbi maximus suscipit ligula, eget aliquet eros. Phasellus a mattis metus. Vestibulum congue odio at purus elementum tempor. In suscipit metus orci, et egestas arcu consequat et.
                  </p>
                </div>
            </div>
        </div>
      </div>
    </div>

<?php get_sidebar(); ?>
<?php previous_posts_link('<< Anterior')?>
<?php next_posts_link('Siguiente >>')?>

<?php include (TEMPLATEPATH. '/videosection.php'); ?>

<?php get_footer(); ?>
