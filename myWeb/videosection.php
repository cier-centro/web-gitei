<div class="row videos-section" data-animate-scroll='{"alpha": "0",
                    "y":"50",
                    "duration": "1.75",
                    "scaleX": "0",
                    "scaleY": "0",
                    "ease": "Elastic.easeIn"}'>
    <h1 class="title-section">
      Videos Gitei
      <a class="title" href="<?php echo get_home_url(); ?>/videos-gitei/">Ver todos los videos >></a>
    </h1>
    <div class="col-xs-12">
      <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Principal') ) : endif; ?>
    </div>
</div>
