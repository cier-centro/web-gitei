    <div class="col-xs-12 col-lg-3">
        <div class="row education-trends">
            <div class="col-xs-12">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#trends">Tendencias Educativas</a></li>
                    <li><a data-toggle="tab" href="#services">Servicios</a></li>
                </ul>
                <div class="tab-content">
                  <div id="trends" class="row tab-pane fade in active">
                      <?php
                           $index = 0;
                           $postslist = get_posts("category_name=Tendencias Educacion&orderby=title&order=asc");
                           foreach ($postslist as $post) : setup_postdata($post);
                           $subtitulo = get_post_meta($post->ID, 'subtitulo', true);
                           $urlPost = get_post_meta($post->ID, 'url', true);
                           $index++;
                       ?>
                       <div class="col-xs-12 col-sm-6 col-lg-12">
                           <div>
                                <div class="trend-body"  data-animate-scroll='{
                                              "alpha": "0",
                                              "duration": "2",
                                              "rotationY":"45",
                                              "z":"-30"}'>
                                  <a href="<?php echo($urlPost); ?>" target="_blank">
                                      <?php if ( has_post_thumbnail() ) { the_post_thumbnail('large', array( 'alt' => get_the_title(), 'title' => get_the_title() )); }?>
                                  </a>
                                </div>
                            </div>
                        </div>
                        <?php endforeach; ?>

                  </div>
                  <div id="services" class="row tab-pane fade">
                    <?php
                         $index = 0;
                         $postslist = get_posts("category_name=Servicios&orderby=title&order=asc");
                         foreach ($postslist as $post) : setup_postdata($post);
                         $subtitulo = get_post_meta($post->ID, 'subtitulo', true);
                         $urlPost = get_post_meta($post->ID, 'url', true);
                         $index++;
                     ?>
                     <div class="col-xs-12 col-sm-6 col-lg-12">
                         <div>
                              <div class="trend-body"  data-animate-scroll='{
                                            "alpha": "0",
                                            "duration": "2",
                                            "rotationY":"45",
                                            "z":"-30"}'>
                                <a href="<?php echo ($urlPost == "" ? the_permalink() : $urlPost) ?>" target="<?php echo ($urlPost == "" ? "_self" : "_blank") ?>">
                                    <?php if ( has_post_thumbnail() ) { the_post_thumbnail('large', array( 'alt' => get_the_title(), 'title' => get_the_title() )); }?>
                                </a>
                              </div>
                          </div>
                      </div>
                      <?php endforeach; ?>
                  </div>
              </div>
            </div>
        </div>
    </div>
</div>
