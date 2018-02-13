    <div class="col-xs-12 col-md-4">
        <div class="row">
            <div class="col-xs-12 education-trends">
              <h1 class="title-section"  data-animate-scroll='{"alpha": "0",
                            "duration": "2"}'>Tendencias en educación</h1>

              <?php
               $index = 0;
               $postslist = get_posts("category_name=Sidebar1&orderby=title&order=asc");
               foreach ($postslist as $post) : setup_postdata($post);
               $subtitulo = get_post_meta($post->ID, 'subtitulo', true);
               $index++;
               ?>

              <div class="col-xs-12 trend-body"  data-animate-scroll='{
                            "alpha": "0",
                            "duration": "2",
                            "rotationY":"45",
                            "z":"-30"}'>
                <a href="<?php the_permalink(); ?>">
                    <span class="badge"><?php echo($index); ?></span>
                    <div>
                      <label class="title">
                        <?php the_title(); ?>
                      </label>
                      <label class="subtitle">
                        <?php echo($subtitulo); ?>
                      </label>
                    </div>
                </a>
            </div>

          <?php endforeach; ?>
        </div>
    </div>
</div>
</div>
