<div class="col-xs-12 col-md-6 home-article vertical-container">
		<div class="vertical-item">
					<div class="thumb">
						<a href="<?php the_permalink(); ?>">
								<?php if ( has_post_thumbnail() ) { the_post_thumbnail(); }?>
						</a>
					</div>
				<div class="item-text">
					<label class="group"><?php the_category(); ?></label>
					<label class="date"><?php the_date(); ?> </label>
					<a class="title" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
					<p><?php the_excerpt(); ?>
					</p>
				</div>
		</div>
</div>
