<div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">
              <a href="<?php echo get_home_url(); ?>">
                  <img class="img-responsive gitei-logo-dark" src="<?php bloginfo('template_url')?>/img/logo_GITEI_dark.png">
              </a>
            </h4>
          </div>
          <div class="modal-body">
              <?php wp_nav_menu(
                array(
                  'container' => false,
                  'items_wrap' => '<ul id="main-menu" class="row">%3$s</ul>',
                  'theme_location' => 'menu'
                )); ?>
              <?php get_search_form(); ?>
            <?php wp_nav_menu(
              array(
                'container' => false,
                'items_wrap' => '<ul class="links-container">%3$s</ul>',
                'theme_location' => 'menu2'
              )); ?>
          </div>
        </div>

      </div>
    </div>
