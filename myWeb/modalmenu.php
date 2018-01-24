<div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-lg">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">
              <a href="<?php echo get_home_url(); ?>">
                  <img class="img-responsive gitei-logo-dark">
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
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Buscar...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                  <span class="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
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