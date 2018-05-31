</div>
<div class="row footer-buttons">
      <div class="container">
          <div class="row">
              <div class="col-xs-12 col-md-4 button-container">
                  <a href="<?php echo get_home_url(); ?>/comunicate-con-nosotros"class="btn btn-link btn-lg first-button">Comunícate con nosotros</a>
              </div>
              <div class="col-xs-12 col-md-4 button-container">
                  <a href="<?php echo get_home_url(); ?>/solicita-asesoria"class="btn btn-link btn-lg second-button">Solicita asesoría</a>
              </div>
              <div class="col-xs-12 col-md-4 button-container">
                  <a href="<?php echo get_home_url(); ?>/vinculate-a-proyectos"class="btn btn-link btn-lg third-button">Vinculate a proyectos</a>
              </div>
          </div>
      </div>
</div>
<div class="row footer">
    <div class="container">
          <div class="row">
              <div class="col-xs-12 col-md-8 left-section">
                  <div class="info-container">
                      <p><b>GITEI</b><br>
                        Grupo de Investigación Tecnología para la Educación y la Innovación<br><br>
                      </p>
                      <p><span class="glyphicon glyphicon-map-marker"></span>Universidad Nacional de Colombia<br>
                         <span class="headquarter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sede Bogotá</span>
                         <span class="glyphicon glyphicon-earphone"></span>(+57-1) 3165000 ext.11156<br><br>
                         <span class="glyphicon glyphicon-envelope"></span>info@gitei.edu.co
                      </p>
                  </div>
                  <div class="logo-container">
                      <a href="<?php echo get_home_url(); ?>">
                          <img class="img-responsive gitei-logo" src="<?php bloginfo('template_url')?>/img/logo_GITEI_dark.png">
                      </a>
                      <div class="vertical-separator">.</div>
                      <a href="http://unal.edu.co/">
                          <img class="img-responsive unal-logo" src="<?php bloginfo('template_url')?>/img/logo_UNAL_dark.png">
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-md-4 right-section">
            <form>
              <?php echo do_shortcode('[ninja_form id=5]') ?>
            </form>
            <span class="title"><a href="#" class="btn btn-block btn-link" role="button">ir al inicio >></a></span>
        </div>
          </div>
      </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/plugins/ScrollToPlugin.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.16.1/plugins/EaselPlugin.min.js"></script>
<script src="<?php bloginfo('template_url')?>/js/animate-scroll.js"></script>
<script src="<?php bloginfo('template_url')?>/js/index.js"></script>
<?php wp_footer(); ?>
</body>
</html>
