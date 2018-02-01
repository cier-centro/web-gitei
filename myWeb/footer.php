<div class="row footer-buttons" data-animate-scroll='{
    "x": "-500",
    "y": "0",
    "alpha": "0",
    "duration": ".5"
}'>
      <div class="col-xs-12 col-md-4">
          <button type="button" class="btn btn-link btn-block btn-lg">Comunícate con nosotros</button>
      </div>
      <div class="col-xs-12 col-md-4">
          <button type="button" class="btn btn-link btn-block btn-lg">Solicita asesoría</button>
      </div>
      <div class="col-xs-12 col-md-4">
          <button type="button" class="btn btn-link btn-block btn-lg">Vinculate a proyectos</button>
      </div>
  </div>
  <div class="row footer" data-animate-scroll='{
      "x": "500",
      "y": "0",
      "alpha": "0",
      "duration": ".5"
  }'>
      <div class="col-xs-12 col-md-8 left-section">
          <div class="logo-container">
              <a href="<?php echo get_home_url(); ?>">
                  <img class="img-responsive gitei-logo" src="<?php bloginfo('template_url')?>/img/logo_GITEI.png">
              </a>
              <a href="#">
                  <img class="img-responsive unal-logo" src="<?php bloginfo('template_url')?>/img/logo_UNAL.png">
              </a>
          </div>
          <div class="links-container">
              <a href="#" class="btn btn-link" role="button">Servicios</a>
              <a href="#" class="btn btn-link" role="button">Acerca de nosotros</a>
          </div>
      </div>
      <div class="col-xs-12 col-md-4 right-section">
          <span class="title">Suscríbete <a href="#" class="btn btn-link" role="button">ir al inicio >></a></span>
          <form>
            <p>Suscríbete gratis y recibe más información de Gitei en tu correo</p>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Ingresa tu correo...">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">
                  <span class="glyphicon glyphicon-envelope"></span>
                </button>
              </span>
            </div>
            <label class="checkbox-inline">
              <input type="checkbox" value="">Acepto que Gitei me mande infomación al correo
            </label>
            <button type="submit" class="btn btn-primary pull-right">Aceptar y Suscribir</button>
          </form>
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
