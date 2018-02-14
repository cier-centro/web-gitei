<?php include (TEMPLATEPATH. '/header2.php'); ?>

<div class="container article-content">
      <?php
        $images = acf_photo_gallery('banner', $post->ID);
        if( count($images) ):
            foreach($images as $image):
                $full_image_url= $image['full_image_url'];
                $title = $image['title']; //The title
      ?>
      <?php if( !empty($full_image_url) ){ ?>
          <div class="row banner">
              <img src="<?php echo $full_image_url; ?>" alt="<?php echo $title; ?>" title="<?php echo $title; ?>">
              <label><?php echo $title; ?></label>
          </div>
      <?php } ?>

      <?php endforeach; endif; ?>
  <label class="breadcrumb"><?php the_breadcrumb(); ?></label>
  <div class="row">
    <div class="col-xs-12 col-md-3">
        <div class="row category-menu">
          <label class="menu-title">
              Contenido
          </label>
          <div class="menus-container">
              <?php wp_nav_menu(
                array(
                  'container' => false,
                  'items_wrap' => '<ul class="menu-items">%3$s</ul>',
                  'theme_location' => 'menuCont'
                )); ?>
              <?php wp_nav_menu(
                array(
                  'container' => false,
                  'items_wrap' => '<ul class="menu-items">%3$s</ul>',
                  'theme_location' => 'menuContOp'
                )); ?>
          </div>
        </div>
    </div>
    <div class="col-xs-12 col-md-7">
      <div class="row">
          <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

            <div class="col-xs-12">
                <div class="vertical-item content-section">
                    <div class="item-text">
                      <label class="group"><?php the_category(); ?></label>
                      <label class="title"><?php the_title(); ?></label>
                      <label class="subtitle"><?php the_date(); ?> </label>
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
    <div class="col-xs-12 col-md-2">
        <div class="row gallery-images">
          <?php
            //Get the images ids from the post_metadata
            $images = acf_photo_gallery('galeria', $post->ID);
            $index = 0;
            //Check if return array has anything in it
            if( count($images) ):
                //Cool, we got some data so now let's loop over it
                foreach($images as $image):
                    $index++;
                    $id = $image['id']; // The attachment id of the media
                    $title = $image['title']; //The title
                    $caption= $image['caption']; //The caption
                    $full_image_url= $image['full_image_url']; //Full size image url
                    $full_image_url_thumbnail = acf_photo_gallery_resize_image($full_image_url, 300, 300); //Resized size to 262px width by 160px height image url
                    $thumbnail_image_url= $image['thumbnail_image_url']; //Get the thumbnail size image url 150px by 150px
                    $url= $image['url']; //Goto any link when clicked
                    $target= $image['target']; //Open normal or new tab
                    $alt = get_field('photo_gallery_alt', $id); //Get the alt which is a extra field (See below how to add extra fields)
                    $class = get_field('photo_gallery_class', $id); //Get the class which is a extra field (See below how to add extra fields)
          ?>
          <div class="col-xs-12">
              <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#image<?php echo $index; ?>">
                  <div class="thumbnail">
                      <?php if( !empty($url) ){ ?><a href="<?php echo $url; ?>" <?php echo ($target == 'true' )? 'target="_blank"': ''; ?>><?php } ?>
                          <img src="<?php echo $full_image_url_thumbnail; ?>" alt="<?php echo $title; ?>" title="<?php echo $title; ?>">
                      <?php if( !empty($url) ){ ?></a><?php } ?>
                  </div>
                  <label class="title"><?php echo $title; ?></label>
              </button>
              <div class="modal fade" id="image<?php echo $index; ?>" role="dialog">
                <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title"><?php echo $title; ?></h4>
                    </div>
                    <div class="modal-body">
                      <div class="image-container">
                          <img class="img-responsive" src="<?php echo $full_image_url; ?>" alt="<?php echo $title; ?>" title="<?php echo $title; ?>">
                      </div>
                      <p><?php echo $caption; ?></p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <?php endforeach; endif; ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
