    <div class="col-xs-12 col-md-4">
        <div class="row">
            <div class="col-xs-12 education-trends">
              <h1 class="title-section"  data-animate-scroll='{"alpha": "0",
                            "duration": "2"}'>Tendencias en educación</h1>

              <?php
               $index = 0;
               $postslist = get_posts("category_name=Tendencias Educacion&orderby=title&order=asc");
               foreach ($postslist as $post) : setup_postdata($post);
               $subtitulo = get_post_meta($post->ID, 'subtitulo', true);
               $urlPost = get_post_meta($post->ID, 'url', true);
               $index++;
               ?>

              <div class="col-xs-12 trend-body"  data-animate-scroll='{
                            "alpha": "0",
                            "duration": "2",
                            "rotationY":"45",
                            "z":"-30"}'>
                <a href="<?php echo($urlPost); ?>" target="_blank">
                    <?php if ( has_post_thumbnail() ) { the_post_thumbnail(); }?>
                </a>
            </div>

          <?php endforeach; ?>
        </div>
    </div>
</div>
</div>
